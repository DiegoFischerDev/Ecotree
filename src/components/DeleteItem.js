'use client'

import { FiTrash2 } from "react-icons/fi";

export default function DeleteItem({id, list, setList, setIsEditing, isEditing, setItemModificado}) {

  function handleDeleteItem() {
    setList(list.filter(item => item.id !== id))
    if(id === isEditing){
      setIsEditing(null)
    }
  }

 return (
  <a onClick={handleDeleteItem} className="cursor-pointer"><FiTrash2 color="red" /></a>
 );
}