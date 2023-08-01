'use client'

import Image from "next/image"
import logo from "../../assets/logo-ecotree.png"
import userAdmin from "../../assets/user-admin.png"
import LogoutButton from "@/components/Logout-Button"
import { FiUser, FiLock } from "react-icons/fi";
import MenuItem from "@/components/MenuItem";
import { useState } from "react"
import Dashboard from "@/components/Dashboard"
import CriarOrçamento from "@/components/CriarOrçamento"
import Orçamentos from "@/components/Orçamentos"
import Materiais from "@/components/Materiais"
import MaoDeObra from "@/components/MãoDeObra"

export default function Application() {

  const [showSection, setShowSection] = useState('Dashboard');
  const [orçamento, setOrçamento] = useState({});

  return (
    <section className="flex text-2xl">

      <div className="min-w-[200px]"></div>

      <div className="fixed left-0 top-0 z-50 bg-slate-500 flex flex-col items-center w-[200px] h-[100vh] justify-between">
        <div className="flex items-center flex-col justify-center">

          <div className="flex items-center flex-col w-[100%] justify-center mt-10">
            <Image
              src={userAdmin}
              alt='Engineering logo'
              width={500}
              height={500}
              className='w-12 rounded-[100%] border-2'
              priority={true}
            />

            <h2 className="text-white text-sm">Administrador</h2>
            <h2 className="text-white text-sm">admin@ecotree.pt</h2>
            <LogoutButton />
          </div>

          <ul className="mt-12">
            <MenuItem title="Dashboard" showSection={showSection} setShowSection={setShowSection} />
            <MenuItem title="Orçamentos" title2="Criar Orçamento" showSection={showSection} setShowSection={setShowSection} />
            <MenuItem title="Materiais" showSection={showSection} setShowSection={setShowSection} />
            <MenuItem title="Mão de Obra" showSection={showSection} setShowSection={setShowSection} />
            {/* <MenuItem title="Menu 5" showSection={showSection} setShowSection={setShowSection} />
            <MenuItem title="Menu 6" showSection={showSection} setShowSection={setShowSection} /> */}
          </ul>
        </div>

        <div className="text-xs text-gray-400 p-5 relative flex justify-center flex-col items-center">
          <Image
            src={logo}
            alt='Engineering logo'
            width={500}
            height={500}
            className='w-[140px]'
            priority={true}
          />
          <h2 className="absolute top-28 left-[58px] bg-slate-500 text-lg text-white">Ecotree</h2>
          <span>Versão 1.0</span><span>Ecotree &copy; 2023</span>
        </div>
      </div>

      <div className="">
        {showSection === "Dashboard" && <Dashboard />}
        {showSection === "Criar Orçamento" && <CriarOrçamento setShowSection={setShowSection} orçamento={orçamento} setOrçamento={setOrçamento}/>}
        {showSection === "Orçamentos" && <Orçamentos setShowSection={setShowSection} setOrçamento={setOrçamento}/>}
        {showSection === "Materiais" && <Materiais />}
        {showSection === "Mão de Obra" && <MaoDeObra />}
        {/* {showSection === "Menu 5" && "Menu 5"}
        {showSection === "Menu 6" && "Menu 6"} */}
      </div>

    </section>
  )
}
