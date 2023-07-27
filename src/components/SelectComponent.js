'use client'

import React, { useEffect, useState } from 'react';

export default function SelectComponent({
  options,
  placeholder,
  value,
  setValue,
  listeningMouseClick,
  setListeningMouseClick,
  className,
}) {

  const [open, setOpen] = useState(false)

  useEffect(()=>{
    if (open && !listeningMouseClick){
      setOpen(false)
    }
  }, [listeningMouseClick])


  return (
    <div className={className}>
      <div className=''>
        <input type='text' onClick={()=>{setListeningMouseClick(true); setOpen(true)}} value={value} placeholder={placeholder} onChange={(e) => { setValue(e.target.value); setOpen(true) }} className='border p-2 text-lg w-full text-center' />
      </div>

      <div className='relative'>
        {open && <ul className='bg-gray-100 p-2 text-lg absolute top-0 left-0 z-10 border'>
          {options.map((option, index)=><li key={index} onClick={()=>{setValue(option)}} className='cursor-pointer text-gray-500'>{option}</li>)}
        </ul>}
      </div>
      
    </div>
  );
}