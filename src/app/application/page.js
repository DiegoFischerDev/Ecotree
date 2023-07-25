import Image from "next/image"
import logo from "../../assets/logo-ecotree.png"
import userAdmin from "../../assets/user-admin.png"
import LogoutButton from "@/components/Logout-Button"
import { FiUser, FiLock } from "react-icons/fi";
import MenuItem from "@/components/MenuItem";

export default function Application() {
  return (
    <section className="flex text-2xl">
      <div className="bg-slate-500 w-[200px]">
        <div className="sticky left-0 top-0 flex flex-col items-center h-[100vh] justify-between">
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
              <MenuItem title="Dashboard" />
              <MenuItem title="Novo Orçamento" />
              <MenuItem title="Clientes" />
              <MenuItem title="Fornecedores" />
              <MenuItem title="Menu 5" />
              <MenuItem title="Menu 6" />
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
            <h2 className="absolute top-28 left-[45px] bg-slate-500 text-lg text-white">Ecotree.pt</h2>
            <span>Versão 1.0</span><span>Ecotree &copy; 2023</span>
          </div>
        </div>
      </div>

      <div className=" w-full p-10">
        <h2>Dashboard</h2>
      </div>

    </section>
  )
}
