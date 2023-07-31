'use client'

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeMaoDeObra from "../api/ListaDeMaoDeObra"

export default function TabelaMaoDeObra({ listeningMouseClick, setListeningMouseClick }) {

  useEffect(() => {
    let listaDeProfissoes = []
    ListaDeMaoDeObra.map((profissional) => {
      if (!listaDeProfissoes.includes(profissional.nome))
        listaDeProfissoes.push(profissional.nome)
    })
    setListaDeProfissoes(listaDeProfissoes)

    let listaDeUnidades = []
    ListaDeMaoDeObra.map((profissional) => {
      if (!listaDeUnidades.includes(profissional.unid))
        listaDeUnidades.push(profissional.unid)
    })
    setListaDeUnidades(listaDeUnidades)
  }, [])


  const [listaDeUnidades, setListaDeUnidades] = useState([])
  const [listaDeProfissoes, setListaDeProfissoes] = useState([])

  const [novoProfissional, setNovoProfissional] = useState('')
  const [novoUnidade, setNovoUnidade] = useState('')
  const [novoPreço, setNovoPreço] = useState('')
  const [novoQuantidade, setNovoQuantidade] = useState('')
  const [novoMargem, setNovoMargem] = useState('0')
  const [novoValorTotal, setNovoValorTotal] = useState('')
  const [novoDescriçao, setNovoDescriçao] = useState('')

  const [ListaDeMaoDeObraDoOrçamento, setListaDeMaoDeObraDoOrçamento] = useState([])

  function handleAdicionarMaoDeObra() {
    if (novoProfissional !== '' && novoUnidade !== '' && novoPreço !== '' && novoQuantidade !== '') {
      let novaLista = ListaDeMaoDeObraDoOrçamento
      novaLista.push({
        id: Math.floor(Math.random() * 1000),
        nome: novoProfissional,
        unid: novoUnidade,
        valor: novoPreço,
        quantidade: novoQuantidade,
        margem: novoMargem,
        valortotal: novoValorTotal,
        descriçao: novoDescriçao,
      })
      setListaDeMaoDeObraDoOrçamento(novaLista)
      resetStates()

    }
  }

  function resetStates() {
    setNovoProfissional('')
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
    ListaDeMaoDeObra.map((profissional) => {
      if (profissional.nome === novoProfissional) {
        setNovoUnidade(profissional.unid)
        setNovoPreço(profissional.valor)
        setNovoQuantidade(1)
        setNovoDescriçao(profissional.descriçao)
      }
    })
  }

  useEffect(() => {
    CalculaPreçoTotal()
  }, [novoPreço, novoQuantidade, novoMargem])

  useEffect(() => {
    VerificaSeTemDados()
  }, [novoProfissional])

  function handleDeleteMaoDeObra(id) {
    setListaDeMaoDeObraDoOrçamento(ListaDeMaoDeObraDoOrçamento.filter(profissional => profissional.id !== id))
  }

  return (
    <div className="mt-10">

      <label className="text-sm text-gray-600">Mao de Obra</label>
      <div className="border">

        <div className="flex px-14 py-2 text-lg text-gray-400 font-semibold bg-gray-100">
          <span className="w-4"></span>
          <span className="w-[300px] flex justify-center">Função</span>
          <span className="w-[100px] flex justify-center">Unid</span>
          <span className="w-[150px] flex justify-center">Preço Unid</span>
          <span className="w-[150px] flex justify-center">Quantidade</span>
          <span className="w-[150px] flex justify-center">Margem</span>
          <span className="w-[100px] flex justify-center">Valor Total</span>
          <span className="w-[400px] flex justify-center">Descriçao</span>
        </div>

        {ListaDeMaoDeObraDoOrçamento.map((profissional, index) => {
          return <div key={profissional.id} className={`text-green-400 flex items-center px-14 py-2 text-lg  ${index % 2 !== 0 ? "bg-gray-100" : ""}`}>
            <FiTrash2 onClick={() => { handleDeleteMaoDeObra(profissional.id) }} className=" cursor-pointer" color="red" />
            <span className="w-[300px] flex justify-center">{profissional.nome}</span>
            <span className="w-[100px] flex justify-center">{profissional.unid}</span>
            <span className="w-[150px] flex justify-center">{profissional.valor} €</span>
            <span className="w-[150px] flex justify-center">{profissional.quantidade} {profissional.unid}</span>
            <span className="w-[150px] flex justify-center">{profissional.margem}%</span>
            <span className="w-[100px] flex justify-center">{profissional.valortotal} $</span>
            <span className="w-[400px] flex justify-center text-sm pl-10">{profissional.descriçao}</span>
          </div>
        }
        )}


        <div className="flex items-center ml-[10px] mt-8">
          <button type="button" onClick={() => { handleAdicionarMaoDeObra() }} className="p-2 w-[70px] mb-3 ml-5 text-lg bg-green-400 h-10 mt-3 flex items-center justify-center text-white rounded">Add</button>

          <SelectComponent options={listaDeProfissoes} placeholder="nome" value={novoProfissional} setValue={setNovoProfissional} listeningMouseClick={listeningMouseClick} setListeningMouseClick={setListeningMouseClick} className="text-green-400 ml-5 w-[230px]" />

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