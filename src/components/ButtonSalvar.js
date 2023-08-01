

export default function ButtonSalvar({listaOriginal, setListaOriginal, itemModificado, setItemModificado, setIsEditing, item}) {

  function handleSalvar(){

    if(item.id !== 0){

      let novaLista = [...listaOriginal]

      for (let i = 0; i < novaLista.length; i++){
        if (novaLista[i].id === item.id){
          novaLista.splice(i, 1, itemModificado);
        }
      }
      
      setListaOriginal(novaLista)
  
      setItemModificado({
        id: 0,
        nome: "Nome",
        unid: "Unid",
        valor: 0,
        descrição: "Descrição do item",
      })

      setIsEditing(null)
    }

    if(item.id === 0){

      let novaLista = [...listaOriginal]
      novaLista.splice(0, 1, itemModificado)
      novaLista[0].id = Math.floor(Math.random() * 10000)
      setListaOriginal(novaLista)
  
      setItemModificado({
        id: 0,
        nome: "Nome",
        unid: "Unid",
        valor: 0,
        descrição: "Descrição do item",
      })

      setIsEditing(null)
    }


  }

 return (
  <button disabled={item.id === itemModificado.id ? false : true} onClick={handleSalvar} key={item.id} className={`w-[100px] ${item.id === itemModificado.id ? "bg-green-400" : "bg-gray-400"} h-10 mt-3 flex items-center justify-center text-white rounded`}>Salvar</button>
 );
}