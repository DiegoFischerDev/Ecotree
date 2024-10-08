'use client'

import { useEffect, useState } from "react";
import ListaDeOrçamentos from "../api/ListaDeOrçamentos"
import { FiZoomIn, FiTrash2, FiPrinter, FiSearch, FiEdit } from "react-icons/fi";
import InputFiltrarLista from "./InputFiltrarLista";
import DeleteItem from "./DeleteItem";

export default function Orçamentos({setShowSection, setOrçamento}) {

  const [listaOriginal, setListaOriginal] = useState(ListaDeOrçamentos)
  const [lista, setLista] = useState(ListaDeOrçamentos)

  const orçamentoVazio = {
    id: Math.floor(Math.random() * 10000),
    cliente: "",
    nifDoCliente: null,
    categoria: "",
    dataDaEmissao: "",
    descriçao: "",
    valorTotal: 0,
    maoDeObra: [],
    materiais: [],
  }

  useEffect(()=>{
    setLista(listaOriginal)
  }, [listaOriginal])

  return (
    <div className='p-5 min-w-[80vw] mb-20'>
      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-500'>Orçamentos</h2>

      <div className="flex items-center mt-10">

        <InputFiltrarLista
        listaOriginal={listaOriginal}
        setLista={setLista}
        Chave="cliente"
        PlaceHolder="Buscar Orçamento"
        />

        <button onClick={()=>{setShowSection("Criar Orçamento"); setOrçamento(orçamentoVazio)}} className="p-2 px-4 mb-3 ml-5 text-lg bg-green-400 h-10 mt-3 flex items-center justify-center text-white rounded">Criar Orçamento</button>
      </div>

      <div className='rounded border border-gray-600 mt-10'>

        <div className='bg-gray-600 p-2 px-4'>
          <h3 className='text-white'>Listagem de Orçamentos</h3>
        </div>

        <div className='flex'>
          <div className='mx-5 ml-4 py-2 text-xl'>
            <h4 className="h-10"></h4>
            {lista?.map((orçamento) =>
              <div key={orçamento.id} className="flex w-32 justify-between py-4 h-10 items-center mt-3">
                <a onClick={()=>{setShowSection("Criar Orçamento"); setOrçamento(orçamento)}} className="cursor-pointer"><FiEdit color="green" /></a>
                <a href="/orçamentoMock.pdf" target={"_blank"} download={false} ><FiPrinter color="blue" /></a>
                <DeleteItem 
                id={orçamento.id}
                list={listaOriginal}
                setList={setListaOriginal}
                />
              </div>)}
          </div>

          {/* <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center font-semibold">id</h4>
            {lista?.map((orçamento) => <h4 key={orçamento.id} className="h-10 text-gray-500 mt-3 flex items-center justify-center">{orçamento.id}</h4>)}
          </div> */}

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Cliente</h4>
            {lista?.map((orçamento) => <p key={orçamento.id} className="w-[300px] h-10 mt-3 flex items-center text-gray-500">{orçamento.cliente}</p>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Categoria</h4>
            {lista?.map((orçamento) => <p key={orçamento.id} className="w-[180px] h-10 mt-3 flex items-center text-gray-500">{orçamento.categoria}</p>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Data da Emissão</h4>
            {lista?.map((orçamento) => <p key={orçamento.id} className="w-[180px] h-10 mt-3 flex items-center text-gray-500">{orçamento.dataDaEmissao}</p>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600 font-semibold">Valor Total</h4>
            {lista?.map((orçamento) => <p key={orçamento.id} className="w-[180px] h-10 mt-3 flex items-center text-gray-500">{orçamento.valorTotal} €</p>)}
          </div>

        </div>

      </div>
    </div>
  );
}