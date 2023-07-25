import Image from "next/image";
import logo from "../assets/logo-ecotree.png"
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <section className="flex items-center justify-center h-[100vh] text-2xl bg-[url('../assets/ecotreeBG-gray.jpg')]">
      <div className="w-[90%] max-w-[500px] bg-white border rounded-md shadow-lg flex items-center flex-col">

        <Image src={logo}
          alt='Engineering logo'
          className='h-[200px]'
          priority={true}
        />

        <h2 className="text-2xl text-gray-500">Bem-Vindo</h2>

        <LoginForm />

      </div>
    </section>
  )
}
