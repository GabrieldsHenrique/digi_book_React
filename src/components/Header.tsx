import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 h-0 grid grid-cols-12 items-center  drop-shadow-xl ">
      <div className="col-span-3 py-4">
        <picture><img src="../img/Digimon_Logo.svg" alt="logo" className="w-60 " /></picture>
      </div>
      <div  className=" menu text-white text-2xl col-start-9 col-span-4 grid grid-cols-3 gap-4 py-4 ">
        <button className="px-1 text-center border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#inicio">Inicio</a>
        </button>
        <button className="text-center border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#buscar">buscar</a>
        </button>
        <button className="text-center border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300">
          <a href="#sobre" >Extra</a>
        </button>
      </div>
    </header>
  )
}

export default Header