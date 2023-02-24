import React from 'react'

const Header = () => {
  return (
    // Deixa o Menu sempre no mesmo lugar nao interferindo no container 
    <header className="sticky top-0 h-0 grid grid-cols-12 items-center  drop-shadow-xl ">
      <div className="col-span-4 py-4 col-start-2 ">
        <picture><img src="../img/Digimon_Logo.svg" alt="Logo Digimon Digital Monsters" className="w-60 " /></picture>
      </div>

      {/* ICONES PARA TELA PEQUENA */}
      <div  className=" menu text-white text-2xl col-start-8 col-span-4 grid grid-cols-3 gap-3 p-2 sm:hidden ">
        <button className="p-1  border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#inicio"><img  src="../img/home.svg" alt="" /></a>
        </button>
        <button className="p-1  border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#buscar"><img  src="../img/pesquisar.svg" alt="" /></a>
        </button>
        <button className="p-1  border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#sobre" ><img  src="../img/plus.svg" alt="" /></a>
        </button>
      </div>

       {/* ICONES PARA TELA GRANDE */}
      <div  className=" menu text-white sm:text-lg lg:text-2xl sm:col-start-7  col-span-5 lg:col-start-8  lg:col-span-4   grid grid-cols-3 gap-3 py-4 hidden sm:grid">
        <button className="px-1 text-center border-2 md:border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#inicio">Inicio</a>
        </button>
        <button className="px-1 text-center border-2  md:border-4  rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#buscar">buscar</a>
        </button>
        <button className="px-1 text-center border-2  md:border-4  rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#sobre" >Extra</a>
        </button>
      </div>
    </header>
  )
}

export default Header