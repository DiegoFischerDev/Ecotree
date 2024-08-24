'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FiUser, FiLock } from "react-icons/fi";

export default function LoginForm() {

  const router = useRouter();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin(e) {

    e.preventDefault()

    if( user !== '' && password !== ''){
      router.push('/application');
    }
  }

  return (
    <form onSubmit={(e) => { handleLogin(e) }} className="border bg-white/80 w-[90%] my-10 rounded flex flex-col items-center">
      <div className="w-full bg-gray-600 p-2">
        <p className="text-sm text-white">Login</p>
      </div>

      <p className="mt-5 text-sm text-red-600 font-semibold">( Utilize qualquer Usuário e Senha para entrar )</p>


      <div className="mt-8 w-[90%] rounded text-lg flex items-center relative">
        <FiUser color="white" className="absolute left-3" />

        <input
        value={user}
        onChange={(e)=>{setUser(e.target.value)}}
        required
        type="text"
        className="w-[100%] bg-gray-600 rounded p-2 text-base text-white pl-10"
        placeholder="Usuário"/>
      </div>

      <div className="mt-3 w-[90%] rounded text-lg flex items-center relative">
        <FiLock color="white" className="absolute left-3" />

        <input
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        required
        type="password"
        className="w-[100%] bg-gray-600 rounded p-2 text-base text-white pl-10"
        placeholder="Senha" />
      </div>

      <input
      type="submit"
      className="my-10 text-lg text-white w-[130px] shadow px-5 py-2 rounded border cursor-pointer bg-gray-600"
      value="Entrar"
      />

      <div className="w-[90%] mb-5 flex justify-between ">
        <a className="flex items-center cursor-pointer">
          <FiLock color="orange" size={15} className="" />
          <p className="text-xs pl-1">Redefinir Senha</p>
        </a>
        <h3 className="text-lg">user@estacio.com.br</h3>
      </div>

    </form>
  )
}
