'use client'

import { useState } from "react";
import { FiTrash2, FiExternalLink, FiPrinter, FiCheckCircle, FiDelete } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeCategorias from "@/api/ListaDeCategorias";
import TabelaMaoDeObra from "./TabelaMaoDeObra";
import TabelaMateriais from "./TabelaMateriais";

export default function CriarOrçamento({setShowSection, orçamento}) {

  const [listeningMouseClick, setListeningMouseClick] = useState(false)

  const [nomeDoCliente, setNomeDoCliente] = useState(orçamento.cliente)
  const [nifDoCliente, setNifDoCliente] = useState(orçamento.nifDoCliente)
  const [categoria, setCategoria] = useState(orçamento.categoria)
  const [dataDoOrçamento, setDataDoOrçamento] = useState(orçamento.dataDaEmissao)
  const [descriçaoDoProjeto, setDescriçaoDoProjeto] = useState(orçamento.descriçao)
  const [maoDeObra, setMaoDeObra] = useState(orçamento.maoDeObra)
  const [materiais, setMateriais] = useState(orçamento.materiais)

  function handleSalvar(e) {
    if( nomeDoCliente !== '' && nifDoCliente !== '' && categoria !== '' && dataDoOrçamento !== '' && descriçaoDoProjeto !== '') {
      e.preventDefault()
      setShowSection("Orçamentos")
    }
  }

  return (
    <div className='p-5 w-[85vw] pb-[500px]' onClick={() => { if (listeningMouseClick) { setListeningMouseClick(false) } }}>

      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-500'>Criar Orçamento</h2>

      <form className="flex flex-col">

        <div className="flex mt-10">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Nome Do Cliente</label>
            <input required value={nomeDoCliente} onChange={(e)=>{setNomeDoCliente(e.target.value)}} type="text" placeholder="Nome Do Cliente" className="border border-gray-600 p-2 text-base w-[400px] text-gray-600" />
          </div>

          <div className="flex flex-col ml-12">
            <label className="text-sm text-gray-600">NIF</label>
            <input required value={nifDoCliente} onChange={(e)=>{setNifDoCliente(e.target.value)}} type="number" placeholder="NIF" className="border border-gray-600 p-2 text-base w-[200px] text-gray-600" />
          </div>

          <div className='flex flex-col ml-12'>
            <label className="text-sm text-gray-600">Categoria</label>
            <SelectComponent options={ListaDeCategorias} placeholder="Categoria" value={categoria} setValue={setCategoria} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-gray-600 border border-gray-600" />
          </div>

          <div className="flex flex-col ml-12">
            <label className="text-sm text-gray-600">Data do Orçamento</label>
            <input required type="text" className={`border border-gray-600 p-[6.5px] text-base w-[200px] ${dataDoOrçamento ? "text-gray-600" : "text-gray-400"}`} value={dataDoOrçamento} placeholder="dia / mês / ano" onChange={(e) => { setDataDoOrçamento(e.target.value) }} />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <label className="text-sm text-gray-600">Descrição do Projeto</label>
          <textarea required value={descriçaoDoProjeto} onChange={(e)=>{setDescriçaoDoProjeto(e.target.value)}} type="number" placeholder="Breve Descrição do Projeto" className="border border-gray-600 p-2 w-[1210px] text-sm h-[200px] text-gray-600" />
        </div>

        <TabelaMateriais listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} materiais={materiais} setMateriais={setMateriais}/>

        <TabelaMaoDeObra listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} maoDeObra={maoDeObra} setMaoDeObra={setMaoDeObra} />

        <div className="flex border border-gray-600 mt-20 items-center">
          <div className="w-[400px] h-[200px] p-5 ml-10">
            <h3 className="text-lg font-semibold mb-5">{nomeDoCliente}</h3>
            <h3 className="text-base">Custo Materiais: € {orçamento.valorTotal*0.60}</h3>
            <h3 className="text-base">Custo Mão de Obra: € {orçamento.valorTotal*0.40}</h3>
            <h3 className="text-base mt-5 font-semibold">Orçamento Total: € {orçamento.valorTotal}</h3>
          </div>

          <div className="w-full flex items-center justify-center">
            
            <a href="/orçamentoMock.pdf" target={"_blank"} download={false}
                className="bg-orange-400 flex items-center justify-evenly p-2 w-[200px] px-4 rounded shadow text-white">Gerar PDF <FiExternalLink /></a>

            <button type="submit" onClick={(e)=>{handleSalvar(e)}} className="bg-green-400 flex items-center justify-evenly w-[200px] ml-10 p-2 px-4 rounded shadow text-white">Salvar <FiCheckCircle /></button>

            <button type="submit" onClick={()=>{setShowSection("Orçamentos")}} className="bg-red-400 flex items-center justify-evenly w-[200px] ml-10 p-2 px-4 rounded shadow text-white">Cancelar <FiDelete /></button>
          </div>
        </div>

      </form>
    </div>
  );
}