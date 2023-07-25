'use-client'

import { FiUser, FiLock } from "react-icons/fi";

export default function LoginForm() {
  return (
    <form className="border w-[90%] my-10 rounded flex flex-col items-center">
      <div className="w-full bg-slate-300 text-gray-500 p-2">
        <p className="text-sm">Faça seu login</p>
      </div>


      <div className="mt-8 w-[90%] rounded text-lg flex items-center relative">
        <FiUser color="gray" className="absolute left-3" />
        <input type="text" className="w-[100%] bg-[#e5f0fc] rounded p-2 text-lg pl-10" placeholder="Usuário"></input>
      </div>

      <div className="mt-2 w-[90%] rounded text-lg flex items-center relative">
        <FiLock color="gray" className="absolute left-3" />
        <input type="password" className="w-[100%] bg-[#e5f0fc] rounded p-2 text-lg pl-10" placeholder="Senha"></input>
      </div>

      <button className="my-10 text-lg shadow px-5 py-2 rounded border">ENTRAR</button>

      <div className="w-[90%] mb-5 flex justify-between text-gray-500">
        <a className="flex items-center cursor-pointer">
          <FiLock color="orange" size={15} className="" />
          <p className="text-xs pl-1">Redefinir Senha</p>
        </a>
        <p className="text-xs">Contacto: geral@ecotree.pt</p>
      </div>

    </form>
  )
}
