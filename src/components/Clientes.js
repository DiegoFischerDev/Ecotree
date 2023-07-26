'use client'

import { useState } from "react";
import ListaDeClientes from "../api/ListaDeClientes"
import { FiZoomIn, FiTrash2, FiTruck, FiPrinter } from "react-icons/fi";

export default function Clientes() {

  const [itemModificado, setItemModificado] = useState(0);

  return (
    <div className='p-10'>
      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Clientes</h2>

      <div className='rounded border mt-10'>

        <div className='bg-gray-200 p-2 px-4'>
          <h3 className='text-gray-500'>Listagem dos Clientes</h3>
        </div>

        <div className='flex'>
          <div className='mx-5 ml-4 py-2 text-xl'>
            <h4 className="h-10"></h4>
            {ListaDeClientes.map((orçamento) =>
              <div key={orçamento.id} className="flex w-32 justify-between py-4 h-10 items-center mt-3">
                <a className="cursor-pointer"><FiZoomIn color="purple" /></a>
                <a className="cursor-pointer"><FiPrinter color="blue" /></a>
                <a className="cursor-pointer"><FiTruck color="green" /></a>
                <a className="cursor-pointer"><FiTrash2 color="red" /></a>
              </div>)}
          </div>

          <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center">id</h4>
            {ListaDeClientes.map((orçamento) => <h4 key={orçamento.id} className="h-10 text-gray-400 mt-3 flex items-center justify-center">{orçamento.id}</h4>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Cliente</h4>
            {ListaDeClientes.map((orçamento) => <input type="text" onChange={(e) => { setItemModificado(orçamento.id) }} key={orçamento.id} placeholder={orçamento.cliente} className={`w-[180px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Categoria</h4>
            {ListaDeClientes.map((orçamento) => <select key={orçamento.id} onChange={() => { setItemModificado(orçamento.id) }} className={`w-[130px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}>
              <option value="Reforma">Reforma</option>
              <option value="Pintura">Pintura</option>
              <option value="Obra">Obra</option>
              <option value="Outras">Outras</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Forma de Pgmt</h4>
            {ListaDeClientes.map((orçamento) => <select key={orçamento.id} onChange={() => { setItemModificado(orçamento.id) }} className={`w-[130px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}>
              <option value="Reforma">Dinheiro</option>
              <option value="Pintura">Multibanco</option>
              <option value="Obra">MB-Way</option>
              <option value="Outras">Outras</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center w-[160px] text-gray-600">Data da Emissão</h4>
            {ListaDeClientes.map((orçamento) => <input key={orçamento.id} type="date" onChange={() => { setItemModificado(orçamento.id) }} className={`w-[160px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center w-[150px] text-gray-600">Data do Pgmt</h4>
            {ListaDeClientes.map((orçamento) => <input key={orçamento.id} type="date" onChange={() => { setItemModificado(orçamento.id) }} className={`w-[160px] h-10 mt-3 flex items-center  ${orçamento.id === itemModificado ? "text-green-400" : "text-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Valor €</h4>
            {ListaDeClientes.map((orçamento) =>
              <div key={orçamento.id} className={`flex items-center mt-3 ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <input type="number" onChange={() => { setItemModificado(orçamento.id) }} placeholder={orçamento.valor} className={`w-[80px] h-10 flex items-center ${orçamento.id === itemModificado ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>
                €
              </div>
            )}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600"></h4>
            {ListaDeClientes.map((orçamento) => <button onClick={() => { setItemModificado(0) }} key={orçamento.id} className={`w-[100px] ${orçamento.id === itemModificado ? "bg-green-400" : "bg-gray-400"} h-10 mt-3 flex items-center justify-center text-white rounded`}>Salvar</button>)}
          </div>

        </div>

      </div>
    </div>
  );
}