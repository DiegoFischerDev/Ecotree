'use client'

import { useState } from "react";
import { FiTrash2, FiExternalLink, FiPrinter, FiCheckCircle } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeCategorias from "@/api/ListaDeCategorias";
import TabelaMaoDeObra from "./TabelaMaoDeObra";
import TabelaMateriais from "./TabelaMateriais";

export default function CriarOrçamento() {

  const [listeningMouseClick, setListeningMouseClick] = useState(false)

  const [nomeDoCliente, setNomeDoCliente] = useState('')
  const [nifDoCliente, setNifDoCliente] = useState('')
  const [categoria, setCategoria] = useState('')
  const [dataDoOrçamento, setDataDoOrçamento] = useState('')
  const [descriçaoDoProjeto, setDescriçaoDoProjeto] = useState('')

  function handleSalvar(e) {
    if( nomeDoCliente !== '' && nifDoCliente !== '' && categoria !== '' && dataDoOrçamento !== '' && descriçaoDoProjeto !== '') {
      // e.preventDefault()
    }
  }

  return (
    <div className='p-10 min-w-[80vw] pb-[500px]' onClick={() => { if (listeningMouseClick) { setListeningMouseClick(false) } }}>

      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Criar Orçamento</h2>

      <form className="flex flex-col">

        <div className="flex mt-10">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Nome Do Cliente</label>
            <input required value={nomeDoCliente} onChange={(e)=>{setNomeDoCliente(e.target.value)}} type="text" placeholder="Nome Do Cliente" className="border p-2 text-lg w-[400px] text-green-400" />
          </div>

          <div className="flex flex-col ml-12">
            <label className="text-sm text-gray-600">NIF</label>
            <input required value={nifDoCliente} onChange={(e)=>{setNifDoCliente(e.target.value)}} type="number" placeholder="NIF" className="border p-2 text-lg w-[200px] text-green-400" />
          </div>

          <div className='flex flex-col ml-12'>
            <label className="text-sm text-gray-600">Categoria</label>
            <SelectComponent options={ListaDeCategorias} placeholder="Categoria" value={categoria} setValue={setCategoria} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400" />
          </div>

          <div className="flex flex-col ml-12">
            <label className="text-sm text-gray-600">Data do Orçamento</label>
            <input required type="date" className={`border p-[6.5px] text-lg w-[200px] ${dataDoOrçamento ? "text-green-400" : "text-gray-400"}`} onChange={(e) => { setDataDoOrçamento(e.target.value) }} />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <label className="text-sm text-gray-600">Descrição do Projeto</label>
          <textarea required value={descriçaoDoProjeto} onChange={(e)=>{setDescriçaoDoProjeto(e.target.value)}} type="number" placeholder="Breve Descrição do Projeto" className="border p-2 text-lg h-[200px] text-green-400" />
        </div>

        <TabelaMaoDeObra listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} />

        <TabelaMateriais listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} />

        <div className="mt-32 w-full flex items-center justify-center">
          
          <a href="/orçamentoMock.pdf" target={"_blank"} download={false}
              className="bg-orange-400 flex items-center justify-evenly p-2 w-[200px] px-4 rounded shadow text-white">Gerar PDF <FiExternalLink /></a>

          <button type="submit" onClick={(e)=>{handleSalvar(e)}} className="bg-green-400 flex items-center justify-evenly w-[200px] ml-10 p-2 px-4 rounded shadow text-white">Salvar <FiCheckCircle /></button>
        </div>

      </form>
    </div>
  );
}