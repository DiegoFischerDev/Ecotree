'use client'

import { useState } from "react";
import ListaDeOrçamentos from "../api/ListaDeOrçamentos"
import { FiZoomIn, FiTrash2, FiPrinter, FiSearch } from "react-icons/fi";

export default function Orçamentos() {

  const [itemModificado, setItemModificado] = useState(0);

  return (
    <div className='p-10'>
      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Orçamentos</h2>

      <div className="relative mt-10">
        <FiSearch color="gray" className="absolute top-[10px] left-[10px]"/>
        <input type="text" placeholder="Buscar Cliente" className="bg-zinc-100 border p-2 pl-12 text-lg text-gray-600"></input>
      </div>

      <div className='rounded border mt-10'>

        <div className='bg-gray-200 p-2 px-4'>
          <h3 className='text-gray-500'>Listagem de Orçamentos</h3>
        </div>

        <div className='flex'>
          <div className='mx-5 ml-4 py-2 text-xl'>
            <h4 className="h-10"></h4>
            {ListaDeOrçamentos.map((orçamento) =>
              <div key={orçamento.id} className="flex w-32 justify-between py-4 h-10 items-center mt-3">
                <a className="cursor-pointer"><FiZoomIn color="purple" /></a>
                <a className="cursor-pointer"><FiPrinter color="blue" /></a>
                <a className="cursor-pointer"><FiTrash2 color="red" /></a>
              </div>)}
          </div>

          <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center">id</h4>
            {ListaDeOrçamentos.map((orçamento) => <h4 key={orçamento.id} className="h-10 text-gray-400 mt-3 flex items-center justify-center">{orçamento.id}</h4>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Cliente</h4>
            {ListaDeOrçamentos.map((orçamento) => <input type="text" key={orçamento.id} placeholder={orçamento.cliente} className={`w-[180px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Categoria</h4>
            {ListaDeOrçamentos.map((orçamento) => <select key={orçamento.id} className={`w-[130px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}>
              <option value="Reforma">Reforma</option>
              <option value="Pintura">Pintura</option>
              <option value="Obra">Obra</option>
              <option value="Outras">Outras</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Forma de Pgmt</h4>
            {ListaDeOrçamentos.map((orçamento) => <select key={orçamento.id} className={`w-[130px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}>
              <option value="Reforma">Dinheiro</option>
              <option value="Pintura">Multibanco</option>
              <option value="Obra">MB-Way</option>
              <option value="Outras">Outras</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center w-[160px] text-gray-600">Data da Emissão</h4>
            {ListaDeOrçamentos.map((orçamento) => <input key={orçamento.id} type="date" className={`w-[160px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Valor €</h4>
            {ListaDeOrçamentos.map((orçamento) =>
              <div key={orçamento.id} className={`flex items-center mt-3 ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <input type="number" placeholder={orçamento.valor} className={`w-[80px] h-10 flex items-center ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>
                €
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}