'use client'

import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function InputFiltrarLista({listaOriginal, setLista, Chave, PlaceHolder}) {

  const [inputDigitado, setInputDigitado] = useState('')

  useEffect(()=>{
    FiltrarLista()
  }, [inputDigitado])

  const FiltrarLista = () => {

    const ListaToLowerCase = inputDigitado.toLowerCase();
    if (ListaToLowerCase === "") {
      setLista(listaOriginal);
    }
    const regex = new RegExp(ListaToLowerCase, "i");

    setLista(listaOriginal?.filter((item) => regex.test(item[Chave])));
  };

  return (
    <div className="relative">
      <FiSearch color="gray" className="absolute top-[10px] left-[10px]" />
      <input type="text" placeholder={PlaceHolder} value={inputDigitado} onChange={(e)=>{setInputDigitado(e.target.value)}} className="bg-zinc-100 border p-2 pl-12 text-lg text-gray-600"></input>
    </div>
  );
}