'use client'

import { useState } from "react";
import ListaDeMateriais from "../api/ListaDeMateriais"
import { FiZoomIn, FiTrash2, FiSearch } from "react-icons/fi";

export default function Materiais() {

  const [itemModificado, setItemModificado] = useState(0);

  return (
    <div className='p-10 min-w-[80vw]'>
      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Materiais</h2>

      <div className="relative mt-10">
        <FiSearch color="gray" className="absolute top-[10px] left-[10px]"/>
        <input type="text" placeholder="Buscar Material" className="bg-zinc-100 border p-2 pl-12 text-lg text-gray-600"></input>
      </div>

      <div className='rounded border mt-10'>

        <div className='bg-gray-200 p-2 px-4'>
          <h3 className='text-gray-500'>Listagem de Materiais</h3>
        </div>

        <div className='flex'>
          <div className='mx-5 ml-4 py-2 text-xl'>
            <h4 className="h-10"></h4>
            {ListaDeMateriais.map((orçamento) =>
              <div key={orçamento.id} className="flex w-16 justify-between py-4 h-10 items-center mt-3">
                <a className="cursor-pointer"><FiZoomIn color="purple" /></a>
                <a className="cursor-pointer"><FiTrash2 color="red" /></a>
              </div>)}
          </div>

          <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center">id</h4>
            {ListaDeMateriais.map((orçamento) => <h4 key={orçamento.id} className="h-10 text-gray-400 mt-3 flex items-center justify-center">{orçamento.id}</h4>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Nome</h4>
            {ListaDeMateriais.map((orçamento) => <input type="text" onChange={(e) => { setItemModificado(orçamento.id) }} key={orçamento.id} placeholder={orçamento.nome} className={`w-[260px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Unid</h4>
            {ListaDeMateriais.map((orçamento) => <select key={orçamento.id} onChange={() => { setItemModificado(orçamento.id) }} className={`w-[100px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}>
              <option value="m">m</option>
              <option value="m²">m²</option>
              <option value="m³">m³</option>
              <option value="Kg">Kg</option>
              <option value="Sacos">Sacos</option>
              <option value="Outro">Outro</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Preço Unid</h4>
            {ListaDeMateriais.map((orçamento) =>
              <div key={orçamento.id} className={`flex items-center mt-3 ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <input type="number" onChange={() => { setItemModificado(orçamento.id) }} placeholder={orçamento.valor} className={`w-[80px] h-10 flex items-center ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>
                €
              </div>
            )}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600"></h4>
            {ListaDeMateriais.map((orçamento) => <button onClick={() => { setItemModificado(0) }} key={orçamento.id} className={`w-[100px] ${orçamento.id === itemModificado ? "bg-green-400" : "bg-gray-400"} h-10 mt-3 flex items-center justify-center text-white rounded`}>Salvar</button>)}
          </div>

        </div>

      </div>
    </div>
  );
}