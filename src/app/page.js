'use client'

import Image from "next/image";
import logo from "../assets/logo-ecotree.png"
import LoginForm from "@/components/LoginForm";
import BgImage from "../assets/EcoHouseBg2.jpg"
import { useState } from "react";

export default function Login() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center h-[100vh] text-2xl">

      <Image src={BgImage}
        alt='Engineering logo'
        className='absolute -z-10 w-[100vw] h-[100vh]'
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />

      {!showLogin && <div className="bg-white/80 p-10 rounded flex flex-col justify-center mb-[400px]">
        <h2 className="text-3xl font-bold text-gray-600">Bem-Vindo</h2>
        <button onClick={()=>{setShowLogin(true)}} className=" bg-gray-600 p-2 px-3 rounded text-base mt-5 font-bold text-white">Fazer Login</button>
      </div>}

      <div className="w-[90%] max-w-[500px] flex items-center flex-col">

        {showLogin && <LoginForm />}

      </div>

    </section>
  )
}
