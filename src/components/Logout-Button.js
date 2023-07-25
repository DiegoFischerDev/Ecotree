'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {

  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} className="text-orange-400 text-sm mt-1 flex items-center">Sair<FiLogOut className="ml-1" /></button>
  )
}
