'use client'

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import Image from "next/image";


export default function Page() {
  return (
    <div className="bg-slate-900 h-screen">
        <Header/>
        <Container/>
    </div>
  );
}
