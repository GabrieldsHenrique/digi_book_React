import { NextPage } from "next";
import React from "react";
import Laterais from "../components/Laterais";
import Container from "../components/Laterais";

const Home: NextPage = () => {
  return (
    <>
      <section>
        {/* Tela Inicio */}
        <div
          id="inicio"
          className="h-[100vh] flex justify-center items-center overflow-auto"
        >
          <picture className="flex justify-end">
            <img
              src="../img/Taichi_Yagami.png"
              className="w-[11.4rem] drop-shadow-2xl "
              alt="Imagem Personagem Taichi Yagami"
            />
          </picture>

          <div className="col-span-6 grid place-items-center justify-center items-center">
            <h1
              id="bem-vindo"
              className="text-white digitacao text-center text-[2.6rem] border-4 rounded-xl p-4 shadow-2xl w-[39rem]"
            >
              BEM-VINDO AO Digi-BOOk.
            </h1>

            <button
              id="botao_bem"
              data-anime="2300"
              className=" fadeInDown shadow-xl mt-5 text-white text-lg text-center px-4 border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] hover:text-white duration-300"
            >
              Proximo
            </button>

            <p
              id="historia"
              className="text-white text-[2rem]  text-center border-4 rounded-xl p-4 shadow-xl hidden digitacao w-[39rem]"
            >
              Aqui você podera analisar todos os digimons existentes, tendo
              disponivel filtros para facilitar a sua busca.
            </p>

            <button
              id="botao_proximo"
              className="hidden shadow-xl mt-5 text-white text-xl text-center px-4 border-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] hover:text-white duration-300"
            >
              <a href="#buscar">Vamos lá</a>
            </button>
          </div>
        </div>
        {/* Fim Inicio */}

        {/* Inicio Buscar */}
        <div id="buscar" className="h-[100vh] grid items-center">
          <div className="grid grid-cols-12 gap-4">
            {/*  Titulo da Pagina  */}
            <div className="col-start-6 col-span-2">
              <h1 className="text-white  text-center text-[1.5rem] border-4 rounded-xl  shadow-2xl ">
                Digi-BOOk
              </h1>
            </div>

            {/* Inicio do Filtro de Busca  */}
            <div className="col-span-12 grid grid-cols-12 gap-4 fonte text-white text-xl ">
              <input
                type="text"
                id="buscaNome"
                placeholder="Nome:"
                className="col-start-3 col-span-3 px-3 shadow-2xl  bg-transparent border-2 focus:border-[#4778A6] rounded-xl  placeholder-white focus:outline-none "
              />
              <button
                id="bNome"
                className="shadow-2xl px-3 text-center text-sm border-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300"
              >
                buscar
              </button>

              <input
                type="text"
                id="buscaLevel"
                placeholder="Level:"
                className="col-span-3 px-3 shadow-2xl  bg-transparent border-2 focus:border-[#4778A6] rounded-xl placeholder-white focus:outline-none "
              />
              <button
                id="bLevel"
                className="shadow-2xl px-3 text-center text-sm border-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300"
              >
                buscar
              </button>
              <button
                id="bLevel"
                className="shadow-2xl px-3 text-center text-sm border-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300"
              >
                All
              </button>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-4  items-center">

              {/* Filtros Laterais */}
              <div className="h-[25rem] col-start-2 grid grid-rows-4 gap-4  items-center">
                <Laterais imgUrl="../img/lob1.png"/>
                 <Laterais imgUrl="../img/lob2.png"/>
                 <Laterais imgUrl="../img/lob3.png"/>
                 <Laterais imgUrl="../img/lob4.png"/>
                 
              </div>

              {/* Tabela DIGIMONS */}
              <div className="col-span-8 col-start-3 border-2 rounded-xl overflow-auto shadow-2xl h-[25rem] "></div>

              {/* Filtros Laterais */}
              <div className="h-[25rem] grid grid-rows-4 gap-4  items-center">
                 <Laterais imgUrl="../img/lag1.png"/>
                 <Laterais imgUrl="../img/lag2.png"/>
                 <Laterais imgUrl="../img/lag3.png"/>
                 <Laterais imgUrl="../img/lag4.png"/>
                 
              </div>
            </div>
          </div>
        </div>
        {/* Fim Buscar */}

        {/* Inicio Extra */}
        <div
          id="sobre"
          className="grid grid-cols-12 gap-4 items-center h-[100vh]"
        >
          {/*  Seleção de Personagens  */}
          <div className="grid grid-rows-3 gap-2 h-[25rem] col-start-2">
                  <Laterais imgUrl="../img/taichi.png"/>
                 <Laterais imgUrl="../img/koshiro.png"/>
                 <Laterais imgUrl="../img/hikari.png"/>
          </div>
          {/* <!-- Fim Seleção de Personagens --> */}


          {/* <!-- Container da Historia --> */}
          <div className="col-span-8  border-2   shadow-2xl h-[25rem]  gap-4 p-12 flex items-center rounded-3xl">
           
            {/* <!-- Apresentação --> */}
            <div
              id="apresentacao"
              className="grid grid-cols-12 gap-2 place-items-center items-center"
            >
              <picture className="col-span-3">
                <img
                  className=" h-[23rem]"
                  src="../img/personagem.png"
                  alt=""
                />
              </picture>
              <div className="col-span-9">
                <h2 className=" text-white text-[1.8rem]   text-center ">
                  Sobre o Anime
                </h2>
                <h2 className=" text-white text-[0.9rem] border-2 rounded-xl p-4 shadow-2xl text-justify bg-[#4778A6] ">
                  {" "}
                  A série começa em 1 de agosto de 1999, quando 6 estudantes —
                  Taichi Yagami, Sora Takenouchi, Yamato Ishida, Takeru
                  Takaishi, Koshiro Izumie e Hikari Kamiya — em férias num
                  acampamento de verão, deparam-se com uma nevasca e encontram
                  pequenos dispositivos misteriosos, caídos do céu. Esses
                  objetos não identificados posteriormente conhecidos como
                  digivices levam as crianças, através de um portal, a um outro
                  mundo.
                  <p className="text-center text-[#ffb96f]">
                    Descubra um pouco mais sobre cada personagens principal
                    selecionando nas barras laterais.
                  </p>
                </h2>
              </div>
            </div>
          </div>
            {/* Fim Apresentação  */}

            {/* Fim Container da Historia  */}

            {/* Seleção de Personagens */}
            <div className="grid grid-rows-3 gap-2 h-[25rem]">
                <Laterais imgUrl="../img/takeru.png"/>
                 <Laterais imgUrl="../img/yamato.png"/>
                 <Laterais imgUrl="../img/sora.png"/>
            </div>
            {/* Fim Seleção de Personagens */}
          </div>
        
      </section>
    </>
  );
};
export default Home;
