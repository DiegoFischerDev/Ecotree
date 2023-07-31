'use client'

import { useEffect, useState } from "react";
import ListaDeMaoDeObra from "../api/ListaDeMaoDeObra"
import { FiZoomIn, FiTrash2, FiSearch } from "react-icons/fi";
import InputFiltrarLista from "./InputFiltrarLista";
import DeleteItem from "./DeleteItem";
import ButtonSalvar from "./ButtonSalvar";

export default function MaoDeObra() {

  const [itemModificado, setItemModificado] = useState(
    {
      id: 0,
      nome: "Função",
      unid: "Unid",
      valor: 0,
      descriçao: "",
    });

  const [listaOriginal, setListaOriginal] = useState(ListaDeMaoDeObra)
  const [lista, setLista] = useState(ListaDeMaoDeObra)

  useEffect(() => {
    setLista(listaOriginal)
  }, [listaOriginal])

  function handleEditNome(profissional, e) {
    let NewProfissional = profissional
    NewProfissional.nome = e.target.value
    setItemModificado(NewProfissional)
  }

  
  function handleAdicionarProfissional() {
    
    const NewProfissional = {
      id: 0,
      nome: "Função",
      unid: "Unid",
      valor: 0,
      descriçao: "Descrição do item",
    }

    if (listaOriginal[0].id !== 0) {
      let novaLista = [...listaOriginal];
      novaLista.unshift(NewProfissional);
      setListaOriginal(novaLista);
    }
  }

  function handleEditNome(profissional, e) {
    let Newprofissional = profissional
    Newprofissional.nome = e.target.value
    setItemModificado(Newprofissional)
  }

  function handleEditUnid(profissional, e) {
    let Newprofissional = profissional
    Newprofissional.unid = e.target.value
    setItemModificado(Newprofissional)
  }

  function handleEditValor(profissional, e) {
    let Newprofissional = profissional
    Newprofissional.valor = e.target.value
    setItemModificado(Newprofissional)
  }

  function handleEditDescriçao(profissional, e) {
    let Newprofissional = profissional
    Newprofissional.descrição = e.target.value
    setItemModificado(Newprofissional)
  }

  return (
    <div className='p-10 min-w-[80vw]'>
      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Mão de Obra</h2>

      <div className="flex items-center mt-10">
        <InputFiltrarLista
          listaOriginal={listaOriginal}
          setLista={setLista}
          Chave="nome"
          PlaceHolder="Buscar Profissional"
        />

        <button onClick={handleAdicionarProfissional} className="p-2 px-4 mb-3 ml-5 text-lg bg-green-400 h-10 mt-3 flex items-center justify-center text-white rounded">Adicionar Profissional</button>
      </div>

      <div className='rounded border mt-10'>

        <div className='bg-gray-200 p-2 px-4'>
          <h3 className='text-gray-500'>Listagem de Profissionais</h3>
        </div>

        <div className='flex'>
          <div className='mx-5 ml-4 py-2 text-xl'>
            <h4 className="h-10"></h4>
            {lista?.map((profissional) =>
              <div key={profissional.id} className="flex w-8 justify-between py-4 h-10 items-center mt-3">
                <DeleteItem
                  id={profissional.id}
                  list={listaOriginal}
                  setList={setListaOriginal}
                />
              </div>)}
          </div>

          <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center">id</h4>
            {lista?.map((profissional) => <h4 key={profissional.id} className="h-10 text-gray-400 mt-3 flex items-center justify-center">{profissional.id}</h4>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Função</h4>
            {lista?.map((profissional) => <input type="text" onChange={(e) => { handleEditNome(profissional, e) }} key={profissional.id} placeholder={profissional.nome} className={`w-[260px] h-10 mt-3 flex items-center  ${profissional.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Unid</h4>
            {lista?.map((profissional) => <select key={profissional.id} placeholder={profissional.unid} onChange={(e) => { handleEditUnid(profissional, e) }} className={`w-[100px] h-10 mt-3 flex items-center  ${profissional.id === itemModificado.id ? "text-green-400" : "text-gray-400"}`}>
              <option value={profissional.unid}>{profissional.unid}</option>
              <option value="hr">hr</option>
              <option value="dia">dia</option>
              <option value="mês">mês</option>
              <option value="Outro">Outro</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Preço Unid</h4>
            {lista?.map((profissional) =>
              <div key={profissional.id} className={`flex items-center mt-3 ${profissional.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <input type="number" onChange={(e) => { handleEditValor(profissional, e) }} placeholder={profissional.valor} className={`w-[80px] h-10 flex items-center ${profissional.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>
                €
              </div>
            )}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Descrição</h4>
            {lista?.map((profissional) =>
              <div key={profissional.id} className={`flex items-center mt-3 ${profissional.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <textarea type="text" onChange={(e) => { handleEditDescriçao(profissional, e) }} placeholder={profissional.descriçao} className={`w-[400px] h-10 text-sm flex items-center ${profissional.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></textarea>
              </div>
            )}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600"></h4>
            {lista?.map((profissional) => <ButtonSalvar
              key={profissional.id}
              listaOriginal={listaOriginal}
              setListaOriginal={setListaOriginal}
              itemModificado={itemModificado}
              setItemModificado={setItemModificado}
              item={profissional} />)}
          </div>

        </div>

      </div>
    </div>
  );
}