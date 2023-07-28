'use client'

import { useState } from "react";
import ListaDeOrçamentos from "../api/ListaDeOrçamentos"
import { FiZoomIn, FiTrash2, FiPrinter, FiSearch } from "react-icons/fi";

export default function Orçamentos() {

  const [itemModificado, setItemModificado] = useState(0);

  return (
    <div className='p-10 min-w-[80vw]'>
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
                <a href="/orçamentoMock.pdf" target={"_blank"} download={false} ><FiPrinter color="blue" /></a>
                <a className="cursor-pointer"><FiTrash2 color="red" /></a>
              </div>)}
          </div>

          <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center font-semibold">id</h4>
            {ListaDeOrçamentos.map((orçamento) => <h4 key={orçamento.id} className="h-10 text-gray-500 mt-3 flex items-center justify-center">{orçamento.id}</h4>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Cliente</h4>
            {ListaDeOrçamentos.map((orçamento) => <p key={orçamento.id} className="w-[300px] h-10 mt-3 flex items-center text-gray-500">{orçamento.cliente}</p>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Categoria</h4>
            {ListaDeOrçamentos.map((orçamento) => <p key={orçamento.id} className="w-[180px] h-10 mt-3 flex items-center text-gray-500">{orçamento.categoria}</p>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Data da Emissão</h4>
            {ListaDeOrçamentos.map((orçamento) => <p key={orçamento.id} className="w-[180px] h-10 mt-3 flex items-center text-gray-500">{orçamento.dataDaEmissao}</p>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Valor €</h4>
            {ListaDeOrçamentos.map((orçamento) => <p key={orçamento.id} className="w-[180px] h-10 mt-3 flex items-center text-gray-500">{orçamento.valor} €</p>)}
          </div>

        </div>

      </div>
    </div>
  );
}