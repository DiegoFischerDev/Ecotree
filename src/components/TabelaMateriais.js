'use client'

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeMateriais from "../api/ListaDeMateriais"

export default function TabelaMateriais({ listeningMouseClick, setListeningMouseClick, materiais, setMateriais }) {

  useEffect(() => {
    let lista = []
    ListaDeMateriais.map((material) => {
      if (!lista.includes(material.nome))
        lista.push(material.nome)
    })
    setListaDeMateriaisDropDown(lista)

    let listaUnid = []
    ListaDeMateriais.map((material) => {
      if (!listaUnid.includes(material.unid))
        listaUnid.push(material.unid)
    })
    setListaDeUnidades(listaUnid)
  }, [])


  const [listaDeUnidades, setListaDeUnidades] = useState([])
  const [listaDeMateriaisDropDown, setListaDeMateriaisDropDown] = useState([])

  const [novoMaterial, setNovoMaterial] = useState('')
  const [novoUnidade, setNovoUnidade] = useState('')
  const [novoPreço, setNovoPreço] = useState('')
  const [novoQuantidade, setNovoQuantidade] = useState('')
  const [novoMargem, setNovoMargem] = useState(0)
  const [novoValorTotal, setNovoValorTotal] = useState('')
  const [novoDescriçao, setNovoDescriçao] = useState('')

  function handleAdicionarMaterial() {
    if (novoMaterial !== '' && novoUnidade !== '' && novoPreço !== '' && novoQuantidade !== '') {
      let novaLista = materiais
      novaLista.push({
        id: Math.floor(Math.random() * 1000),
        nome: novoMaterial,
        unid: novoUnidade,
        valor: novoPreço,
        quantidade: novoQuantidade,
        margem: novoMargem,
        valortotal: novoValorTotal,
        descriçao: novoDescriçao,
      })
      setMateriais(novaLista)
      resetStates()

    }
  }

  function resetStates() {
    setNovoMaterial('')
    setNovoUnidade('')
    setNovoPreço('')
    setNovoQuantidade('')
    setNovoValorTotal('')
    setNovoDescriçao('')
  }

  function CalculaPreçoTotal() {
    let valorTotal = novoPreço * novoQuantidade + novoPreço * novoQuantidade * novoMargem / 100
    setNovoValorTotal(valorTotal)
  }

  function VerificaSeTemDados() {
    ListaDeMateriais.map((material) => {
      if (material.nome === novoMaterial) {
        setNovoUnidade(material.unid)
        setNovoPreço(material.valor)
        setNovoQuantidade(1)
        setNovoDescriçao(material.descriçao)
      }
    })
  }

  useEffect(() => {
    CalculaPreçoTotal()
  }, [novoPreço, novoQuantidade, novoMargem])

  useEffect(() => {
    VerificaSeTemDados()
  }, [novoMaterial])

  function handleDeleteMaoDeObra(id) {
    setMateriais(materiais.filter(material => material.id !== id))
  }

  return (
    <div className="mt-20 mb-10">

      <div className="border border-gray-600">

        <div className="flex items-center px-7 py-2 text-sm text-white font-semibold bg-gray-600">
          <span className="w-[100px] text-orange-400 text-lg">Materiais</span>
          <span className="w-[90px] flex justify-center mr-[60px]">Nome</span>
          <span className="w-[70px] flex justify-center">Unid</span>
          <span className="w-[120px] flex justify-center">Preço Unid</span>
          <span className="w-[120px] flex justify-center">Quantidade</span>
          <span className="w-[120px] flex justify-center">Margem</span>
          <span className="w-[100px] flex justify-center">Valor Total</span>
          <span className="w-[400px] flex justify-start ml-[20px]">Descrição</span>
        </div>

        {materiais.map((material, index) => {
          return <div key={material.id} className={`text-gray-600 flex items-center px-14 py-2 text-base  ${index % 2 !== 0 ? "bg-gray-200" : ""}`}>
            <FiTrash2 onClick={() => { handleDeleteMaoDeObra(material.id) }} className=" cursor-pointer" color="red" />
            <span className="w-[210px] flex justify-center">{material.nome}</span>
            <span className="w-[60px] flex justify-center">{material.unid}</span>
            <span className="w-[125px] flex justify-center">{material.valor} €</span>
            <span className="w-[125px] flex justify-center">{material.quantidade} {material.unid}</span>
            <span className="w-[100px] flex justify-center">{material.margem}%</span>
            <span className="w-[100px] flex justify-center">{material.valor*material.quantidade+material.valor*material.quantidade*material.margem/100} $</span>
            <span className="w-[400px] flex justify-center text-sm pl-10">{material.descriçao}</span>
          </div>
        }
        )}


        <div className="flex items-center ml-[10px] mt-8">
          <button type="button" onClick={() => { handleAdicionarMaterial() }} className={`p-2 w-[70px] mb-3 ml-2 text-lg  ${novoMaterial !== '' && novoUnidade !== '' && novoPreço !== '' && novoQuantidade !== '' ? "bg-green-400" : "bg-gray-600"} h-10 mt-3 flex items-center justify-center text-white rounded`}>Add</button>

          <SelectComponent options={listaDeMateriaisDropDown} placeholder="Nome" value={novoMaterial} setValue={setNovoMaterial} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400 ml-5 w-[160px]" />

          <SelectComponent options={listaDeUnidades} placeholder="Unid" value={novoUnidade} setValue={setNovoUnidade} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400 ml-3 w-[100px]" />

          <div className="relative">
            <input type="number" value={novoPreço} onChange={(e) => { setNovoPreço(e.target.value) }} placeholder="Preço Unid" className="p-2 text-base border border-gray-600 ml-3 w-[110px] text-green-400 text-center" />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">€</label>
          </div>

          <div className="relative">
            <input type="number" value={novoQuantidade} onChange={(e) => { setNovoQuantidade(e.target.value) }} placeholder="Quantidade" className="p-2 text-base border border-gray-600 ml-3 w-[120px] text-green-400 text-center" />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">{novoUnidade}</label>
          </div>

          <div className="relative">
            <input type="number" value={novoMargem} onChange={(e) => { setNovoMargem(e.target.value) }} placeholder="Margem" className={`p-2 text-base border border-gray-600 ml-3 w-[90px]  ${novoMargem !== 0 ? "text-green-400" : "text-gray-400"} text-center`} />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">%</label>
          </div>

          <div className="relative">
            <input type="number" value={novoValorTotal} onChange={(e) => { setNovoValorTotal(e.target.value) }} placeholder={novoValorTotal} className={`p-2 text-base border border-gray-600 ml-3 w-[110px] ${novoValorTotal !== 0 ? "text-green-400" : "text-gray-400"} text-center`} />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">€</label>
          </div>

          <textarea type="text" value={novoDescriçao} onChange={(e) => { setNovoDescriçao(e.target.value) }} placeholder="Descrição" className="p-2 text-sm border border-gray-600 ml-3 w-[370px] h-[42px] text-green-400 text-start" />

        </div>

      </div>

    </div>
  );
}