'use client'

import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import SelectComponent from "./SelectComponent";
import ListaDeMaoDeObra from "../api/ListaDeMaoDeObra"

export default function TabelaMaoDeObra({ listeningMouseClick, setListeningMouseClick, maoDeObra, setMaoDeObra }) {

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
  const [novoMargem, setNovoMargem] = useState(0)
  const [novoValorTotal, setNovoValorTotal] = useState('')
  const [novoDescriçao, setNovoDescriçao] = useState('')

  function handleAdicionarMaoDeObra() {
    if (novoProfissional !== '' && novoUnidade !== '' && novoPreço !== '' && novoQuantidade !== '') {
      let novaLista = maoDeObra
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
      setMaoDeObra(novaLista)
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
    setMaoDeObra(maoDeObra.filter(profissional => profissional.id !== id))
  }

  return (
    <div className="mt-10">

      <div className="border border-gray-600">

        <div className="flex items-center px-4 py-2 text-sm text-white font-semibold bg-gray-600">
          <span className="w-[120px] text-orange-400 text-lg">Mão de Obra</span>
          <span className="w-[100px] flex justify-center mr-[45px]">Função</span>
          <span className="w-[70px] flex justify-center">Unid</span>
          <span className="w-[120px] flex justify-center">Preço Unid</span>
          <span className="w-[120px] flex justify-center">Quantidade</span>
          <span className="w-[120px] flex justify-center">Margem</span>
          <span className="w-[100px] flex justify-center">Valor Total</span>
          <span className="w-[300px] flex justify-start ml-[20px]">Descrição</span>
        </div>

        {maoDeObra.map((profissional, index) => {
          return <div key={profissional.id} className={`text-gray-600 flex items-center px-14 py-2 text-base  ${index % 2 !== 0 ? "bg-gray-200" : ""}`}>
            <FiTrash2 onClick={() => { handleDeleteMaoDeObra(profissional.id) }} className=" cursor-pointer" color="red" />
            <span className="w-[210px] flex justify-center">{profissional.nome}</span>
            <span className="w-[60px] flex justify-center">{profissional.unid}</span>
            <span className="w-[125px] flex justify-center">{profissional.valor} €</span>
            <span className="w-[125px] flex justify-center">{profissional.quantidade} {profissional.unid}</span>
            <span className="w-[100px] flex justify-center">{profissional.margem}%</span>
            <span className="w-[100px] flex justify-center">{profissional.valor*profissional.quantidade+profissional.valor*profissional.quantidade*profissional.margem/100} $</span>
            <span className="w-[400px] flex justify-center text-sm pl-10">{profissional.descriçao}</span>
          </div>
        }
        )}


        <div className="flex items-center ml-[10px] mt-8">
          <button type="button" onClick={() => { handleAdicionarMaoDeObra() }} className={`p-2 w-[70px] mb-3 ml-2 text-lg ${novoProfissional !== '' && novoUnidade !== '' && novoPreço !== '' && novoQuantidade !== '' ? "bg-green-400" : "bg-gray-600"} h-10 mt-3 flex items-center justify-center text-white rounded`}>Add</button>

          <SelectComponent
          placeholder="Nome"
          options={listaDeProfissoes}
          value={novoProfissional}
          setValue={setNovoProfissional}
          listeningMouseClick={listeningMouseClick}
          setListeningMouseClick={setListeningMouseClick}
          className="text-green-400 ml-5 w-[160px]"
          />

          <SelectComponent
          placeholder="Unid"
          options={listaDeUnidades}
          value={novoUnidade}
          setValue={setNovoUnidade}
          listeningMouseClick={listeningMouseClick}
          setListeningMouseClick={setListeningMouseClick}
          className="text-green-400 ml-3 w-[100px]"
          />

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