

export default function ButtonSalvar({listaOriginal, setListaOriginal, itemModificado, setItemModificado, item}) {

  function handleSalvar(){

    if(item.id !== 0 && item.id === itemModificado.id){

      let novaLista = [...listaOriginal]
      novaLista.splice(item.id-1, 1, itemModificado);
      setListaOriginal(novaLista)
  
      setItemModificado({
        id: 0,
        nome: "Nome",
        unid: "Unid",
        valor: 0,
        descrição: "Descrição do item",
      })
    }

    if(item.id === 0 && item.nome !== 'Nome' && item.unid !== 'Unid' && item.valor !== 0){

      let novaLista = [...listaOriginal]
      novaLista.splice(item.id, 1, itemModificado);
      novaLista.map((item)=>{
        item.id = item.id+1
      })
      setListaOriginal(novaLista)
  
      setItemModificado({
        id: 0,
        nome: "Nome",
        unid: "Unid",
        valor: 0,
        descrição: "Descrição do item",
      })
    }


  }

 return (
  <button onClick={handleSalvar} key={item.id} className={`w-[100px] ${item.id === itemModificado.id ? "bg-green-400" : "bg-gray-400"} h-10 mt-3 flex items-center justify-center text-white rounded`}>Salvar</button>
 );
}