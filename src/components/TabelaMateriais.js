'use client'

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeMateriais from "../api/ListaDeMateriais"

export default function TabelaMateriais({ listeningMouseClick, setListeningMouseClick }) {

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
  const [novoMargem, setNovoMargem] = useState('0')
  const [novoValorTotal, setNovoValorTotal] = useState('')
  const [novoDescriçao, setNovoDescriçao] = useState('')

  const [ListaDeMateriaisDoOrçamento, setListaDeMateriaisDoOrçamento] = useState([])

  function handleAdicionarMaterial() {
    if (novoMaterial !== '' && novoUnidade !== '' && novoPreço !== '' && novoQuantidade !== '') {
      let novaLista = ListaDeMateriaisDoOrçamento
      novaLista.push({
        id: Math.floor(Math.random() * 1000),
        nome: novoMaterial,
        unid: novoUnidade,
        preçounid: novoPreço,
        quantidade: novoQuantidade,
        margem: novoMargem,
        valortotal: novoValorTotal,
        descriçao: novoDescriçao,
      })
      setListaDeMateriaisDoOrçamento(novaLista)
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
        setNovoDescriçao(material.descrição)
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
    setListaDeMateriaisDoOrçamento(ListaDeMateriaisDoOrçamento.filter(material => material.id !== id))
  }

  return (
    <div className="mt-10">

      <label className="text-sm text-gray-600">Materiais</label>
      <div className="border">

        <div className="flex px-14 py-2 text-lg text-gray-400 font-semibold bg-gray-100">
          <span className="w-4"></span>
          <span className="w-[300px] flex justify-center">Nome</span>
          <span className="w-[100px] flex justify-center">Unid</span>
          <span className="w-[150px] flex justify-center">Preço Unid</span>
          <span className="w-[150px] flex justify-center">Quantidade</span>
          <span className="w-[150px] flex justify-center">Margem</span>
          <span className="w-[100px] flex justify-center">Valor Total</span>
          <span className="w-[400px] flex justify-center">Descriçao</span>
        </div>

        {ListaDeMateriaisDoOrçamento.map((material, index) => {
          return <div key={material.id} className={`text-green-400 flex items-center px-14 py-2 text-lg  ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
            <FiTrash2 onClick={() => { handleDeleteMaoDeObra(material.id) }} className=" cursor-pointer" color="red" />
            <span className="w-[300px] flex justify-center">{material.nome}</span>
            <span className="w-[100px] flex justify-center">{material.unid}</span>
            <span className="w-[150px] flex justify-center">{material.preçounid} €</span>
            <span className="w-[150px] flex justify-center">{material.quantidade} {material.unid}</span>
            <span className="w-[150px] flex justify-center">{material.margem}%</span>
            <span className="w-[100px] flex justify-center">{material.valortotal} $</span>
            <span className="w-[400px] flex justify-center text-sm pl-10">{material.descriçao}</span>
          </div>
        }
        )}


        <div className="flex items-center ml-[10px] mt-8">
          <button type="button" onClick={() => { handleAdicionarMaterial() }} className="p-2 w-[70px] mb-3 ml-5 text-lg bg-green-400 h-10 mt-3 flex items-center justify-center text-white rounded">Add</button>

          <SelectComponent options={listaDeMateriaisDropDown} placeholder="Nome" value={novoMaterial} setValue={setNovoMaterial} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400 ml-5 w-[230px]" />

          <SelectComponent options={listaDeUnidades} placeholder="Unid" value={novoUnidade} setValue={setNovoUnidade} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400 ml-3 w-[120px]" />

          <div className="relative">
            <input type="number" value={novoPreço} onChange={(e) => { setNovoPreço(e.target.value) }} placeholder="Preço Unid" className="p-2 text-lg border ml-3 w-[130px] text-green-400 text-center" />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">€</label>
          </div>

          <div className="relative">
            <input type="number" value={novoQuantidade} onChange={(e) => { setNovoQuantidade(e.target.value) }} placeholder="Quantidade" className="p-2 text-lg border ml-3 w-[140px] text-green-400 text-center" />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">{novoUnidade}</label>
          </div>

          <div className="relative">
            <input type="number" value={novoMargem} onChange={(e) => { setNovoMargem(e.target.value) }} placeholder="Margem" className="p-2 text-lg border ml-3 w-[130px] text-green-400 text-center" />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">%</label>
          </div>

          <div className="relative">
            <input type="number" value={novoValorTotal} onChange={(e) => { setNovoValorTotal(e.target.value) }} placeholder={novoValorTotal} className="p-2 text-lg border ml-3 w-[130px] text-green-400 text-center" />
            <label className="text-[15px] absolute right-2 -bottom-2 text-green-400">€</label>
          </div>

          <textarea type="text" value={novoDescriçao} onChange={(e) => { setNovoDescriçao(e.target.value) }} placeholder="Descriçao" className="p-2 text-sm border ml-3 w-[400px] h-[47px] text-green-400 text-center" />

        </div>

      </div>

    </div>
  );
}