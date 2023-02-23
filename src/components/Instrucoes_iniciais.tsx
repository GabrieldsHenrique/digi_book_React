import React, { useState } from "react";
import DelayedElement from "./DelayedRender";
import Manuscrito from "./manuscrito";

function Instrucoes_iniciais() {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const handleButtonClick = () => {
    setShowFirstDiv(false);
  };

  return (
    <div>
      {showFirstDiv && (
        <div className=" grid  place-items-center justify-center items-center">
          <h1
              className="text-white  text-center text-[2.6rem] border-4 rounded-xl p-4 shadow-2xl w-[39rem]"
            >
              <Manuscrito>BEM-VINDO AO Digi-BOOk.</Manuscrito>
            </h1>

            <DelayedElement
              element={
                <button onClick={handleButtonClick}
                  className=" hadow-xl mt-5 text-white text-lg text-center px-4 border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] hover:text-white duration-300"
                >
                  Proximo
                </button>
              }
              delay={3000}
              transitionTime={1000}
            />
        </div>
      )}
      {!showFirstDiv && (
        <div className=" grid  place-items-center justify-center items-center">
          <p
              className="text-white text-[2rem]  text-center border-4 rounded-xl p-4 shadow-xl  w-[39rem]"
            >
              <Manuscrito>Aqui você podera analisar todos os digimons existentes, tendo
              disponivel filtros para facilitar a sua busca.</Manuscrito>
            </p>
          
            <button
              className=" shadow-xl mt-5 text-white text-xl text-center px-4 border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] hover:text-white duration-300"
            >
              <a href="#buscar">Vamos lá</a>
            </button>
          
        </div>
      )}
    </div>
  );
}

export default Instrucoes_iniciais;