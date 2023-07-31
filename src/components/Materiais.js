'use client'

import { useEffect, useState } from "react";
import ListaDeMateriais from "../api/ListaDeMateriais"
import { FiZoomIn, FiTrash2, FiSearch, FiEdit } from "react-icons/fi";
import InputFiltrarLista from "./InputFiltrarLista";
import DeleteItem from "./DeleteItem";
import ButtonSalvar from "./ButtonSalvar";

export default function Materiais() {

  const [itemModificado, setItemModificado] = useState(
    {
      id: 0,
      nome: "Nome",
      unid: "Unid",
      valor: 0,
      descrição: "",
    });

  const [listaOriginal, setListaOriginal] = useState(ListaDeMateriais)
  const [lista, setLista] = useState(ListaDeMateriais)

  useEffect(() => {
    setLista(listaOriginal)
  }, [listaOriginal])


  function handleAdicionarMaterial() {

    let NewMaterial = {
      id: 0,
      nome: "Nome",
      unid: "Unid",
      valor: 0,
      descrição: "Descrição do item",
    }

    if (listaOriginal[0].id !== 0) {
      let novaLista = [...listaOriginal];
      novaLista.unshift(NewMaterial);
      setListaOriginal(novaLista);
    }
  }

  function handleEditNome(material, e) {
    let NewMaterial = material
    NewMaterial.nome = e.target.value
    setItemModificado(NewMaterial)
  }

  function handleEditUnid(material, e) {
    let NewMaterial = material
    NewMaterial.unid = e.target.value
    setItemModificado(NewMaterial)
  }

  function handleEditValor(material, e) {
    let NewMaterial = material
    NewMaterial.valor = e.target.value
    setItemModificado(NewMaterial)
  }

  function handleEditDescriçao(material, e) {
    let NewMaterial = material
    NewMaterial.descrição = e.target.value
    setItemModificado(NewMaterial)
  }

  return (
    <div className='p-10 min-w-[80vw]'>
      <h2 className='text-gray-500 border-b-4 font-semibold border-gray-400'>Materiais</h2>

      <div className="flex items-center mt-10">
        <InputFiltrarLista
          listaOriginal={listaOriginal}
          setLista={setLista}
          Chave="nome"
          PlaceHolder="Buscar Material"
        />

        <button onClick={handleAdicionarMaterial} className="p-2 px-4 mb-3 ml-5 text-lg bg-green-400 h-10 mt-3 flex items-center justify-center text-white rounded">Adicionar Material</button>
      </div>

      <div className='rounded border mt-10'>

        <div className='bg-gray-200 p-2 px-4'>
          <h3 className='text-gray-500'>Listagem de Materiais</h3>
        </div>

        <div className='flex'>
          <div className='mx-5 ml-4 py-2 text-xl'>
            <h4 className="h-10"></h4>
            {lista?.map((material) =>
              <div key={material.id} className="flex w-8 justify-between py-4 h-10 items-center mt-3">
                <DeleteItem
                  id={material.id}
                  list={listaOriginal}
                  setList={setListaOriginal}
                />
              </div>)}
          </div>

          <div className='mx-5 p-2 text-xl'>
            <h4 className="h-10 flex items-center justify-center">id</h4>
            {lista?.map((material) => <h4 key={material.id} className="h-10 text-gray-400 mt-3 flex items-center justify-center">{material.id}</h4>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Nome</h4>
            {lista?.map((material) => <input type="text" onChange={(e) => { handleEditNome(material, e) }} key={material.id} placeholder={material.nome} className={`w-[260px] h-10 mt-3 flex items-center  ${material.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Unid</h4>
            {lista?.map((material) => <select key={material.id} placeholder={material.unid} onChange={(e) => { handleEditUnid(material, e) }} className={`w-[150px] h-10 mt-3 flex items-center  ${material.id === itemModificado.id ? "text-green-400" : "text-gray-400"}`}>
              <option value={material.unid}>{material.unid}</option>
              <option value="m">m</option>
              <option value="m²">m²</option>
              <option value="m³">m³</option>
              <option value="Kg">Kg</option>
              <option value="Sacos">Sacos</option>
              <option value="Outro">Outro</option>
            </select>)}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Preço Unid</h4>
            {lista?.map((material) =>
              <div key={material.id} className={`flex items-center mt-3 ${material.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <input type="number" onChange={(e) => { handleEditValor(material, e) }} placeholder={material.valor} className={`w-[80px] h-10 flex items-center ${material.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></input>
                €
              </div>
            )}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600">Descrição</h4>
            {lista?.map((material) =>
              <div key={material.id} className={`flex items-center mt-3 ${material.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}>
                <textarea type="text" onChange={(e) => { handleEditDescriçao(material, e) }} placeholder={material.descrição} className={`w-[400px] h-10 text-sm flex items-center ${material.id === itemModificado.id ? "text-green-400 placeholder-green-400" : "text-gray-400 placeholder-gray-400"}`}></textarea>
              </div>
            )}
          </div>

          <div className='mx-5 py-2 text-xl'>
            <h4 className="h-10 flex items-center text-gray-600"></h4>
            {lista?.map((material) => <ButtonSalvar
              key={material.id}
              listaOriginal={listaOriginal}
              setListaOriginal={setListaOriginal}
              itemModificado={itemModificado}
              setItemModificado={setItemModificado}
              item={material} />)}
          </div>

        </div>

      </div>
    </div>
  );
}