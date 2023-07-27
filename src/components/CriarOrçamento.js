'use client'

import { useState } from "react";
import { FiTrash2, FiTruck, FiPrinter } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeCategorias from "@/api/ListaDeCategorias";
import TabelaMaoDeObra from "./TabelaMaoDeObra";

export default function CriarOrçamento() {

  const [categoria, setCategoria] = useState('')
  const [listeningMouseClick, setListeningMouseClick] = useState(false)
  const [dataDoOrçamento, setDataDoOrçamento] = useState('')

  return (
    <div className='p-10 min-w-[80vw] pb-[500px]' onClick={() => { if (listeningMouseClick) { setListeningMouseClick(false) } }}>

      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Criar Orçamento</h2>

      <form className="flex flex-col">

        <div className="flex mt-10">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Nome Do Cliente</label>
            <input type="text" placeholder="Nome Do Cliente" className="border p-2 text-lg w-[400px] text-green-400" />
          </div>

          <div className="flex flex-col ml-12">
            <label className="text-sm text-gray-600">NIF</label>
            <input type="number" placeholder="NIF" className="border p-2 text-lg w-[200px] text-green-400" />
          </div>

          <div className='flex flex-col ml-12'>
            <label className="text-sm text-gray-600">Categoria</label>
            <SelectComponent options={ListaDeCategorias} placeholder="Categoria" value={categoria} setValue={setCategoria} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400" />
          </div>

          <div className="flex flex-col ml-12">
            <label className="text-sm text-gray-600">Data do Orçamento</label>
            <input type="date" className={`border p-[6.5px] text-lg w-[200px] ${dataDoOrçamento ? "text-green-400" : "text-gray-400"}`} onChange={(e) => { setDataDoOrçamento(e.target.value) }} />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <label className="text-sm text-gray-600">Descrição do Projeto</label>
          <textarea type="number" placeholder="Breve Descrição do Projeto" className="border p-2 text-lg h-[200px] text-green-400" />
        </div>

        <TabelaMaoDeObra listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} />

      </form>
    </div>
  );
}