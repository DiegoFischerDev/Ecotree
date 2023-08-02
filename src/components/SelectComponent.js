'use client'

import React, { useEffect, useState } from 'react';

export default function SelectComponent({
  placeholder,
  options,
  value,
  setValue,
  listeningMouseClick,
  setListeningMouseClick,
  className,
}) {

  const [open, setOpen] = useState(false)

  const [lista, setLista] = useState(options)

  useEffect(()=>{
    if (open && !listeningMouseClick){
      setOpen(false)
    }
  }, [listeningMouseClick])

  function FiltrarLista() {

    const ListaToLowerCase = value.toLowerCase();
    if (ListaToLowerCase === "") {
      setLista(options);
    }
    const regex = new RegExp(ListaToLowerCase, "i");

    setLista(options?.filter((item) => regex.test(item)));
  };


  return (
    <div className={className}>
      <div className=''>
        <input type='text' onClick={()=>{setListeningMouseClick(true); setOpen(true); FiltrarLista()}} value={value} placeholder={placeholder} onChange={(e) => { setValue(e.target.value); setOpen(true); FiltrarLista() }} className='border border-gray-600 p-2 text-base w-full text-start' />
      </div>

      <div className='relative'>
        {open && <ul className='bg-gray-100 p-2 text-base absolute top-0 left-0 z-10 border'>
          {lista.map((item, index)=><li key={index} onClick={()=>{setValue(item)}} className='cursor-pointer text-gray-500'>{item}</li>)}
        </ul>}
      </div>
      
    </div>
  );
}