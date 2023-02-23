import axios from "axios";
import { NextPage } from "next";
import React, { useRef, useEffect, useState } from "react";

import Instrucoes_iniciais from "../components/Instrucoes_iniciais";

import Laterais from "../components/Laterais";
import Manuscrito from "../components/manuscrito";
import ParticipantButton from "../components/personagem";

const Home: NextPage = () => {
  const nameTeste = useRef(null);

  const [loading, setLoading] = useState(false);
  const [digimons, setDigimons] = useState([]);
  const [searchName, setSearchName] = useState("");

  const [searchLevel, setSearchLevel] = useState("");

  const handleClick = (value: string) => {
    setSearchLevel(value);
  };
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://digimon-api.vercel.app/api/digimon/"
      );
      setDigimons(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  console.log(digimons);

  return (
    <>
      <section>
        {/* Tela Inicio */}
        <div
          id="inicio"
          className="h-[100vh] flex justify-center items-center "
        >
          <picture className="flex justify-end">
            <img
              src="../img/Taichi_Yagami.png"
              className="w-[11.4rem] drop-shadow-2xl "
              alt="Imagem Personagem Taichi Yagami"
            />
          </picture>
          
            <Instrucoes_iniciais></Instrucoes_iniciais>

          </div>
        
        {/* Fim Inicio */}

        {/* Inicio Buscar */}
        <div id="buscar" className="h-[100vh] grid items-center">
          <div className="grid grid-cols-12 gap-4">
            {/*  Titulo da Pagina  */}
            <div className="col-start-6 col-span-2">
            <h1 className="text-white  text-center text-[1.5rem] border-4 rounded-xl  shadow-2xl ">Digi-BOOk</h1>
            </div>
            {/* Inicio do Filtro de Busca  */}
            <div className="col-span-12 grid grid-cols-12 gap-4 fonte text-white text-xl ">
              <input
                onChange={(e) => setSearchName(e.target.value)}
                type="text"
                id="buscaNome"
                placeholder="Nome:"
                className="col-start-3 col-span-3 px-3 shadow-2xl  bg-transparent border-2 focus:border-[#4778A6] rounded-xl  placeholder-white focus:outline-none "
              />
              <button
                id="bLevel"
                className="shadow-2xl px-3 text-center text-sm border-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300"
              >
                buscar
              </button>

              <input
                type="text"
                onChange={(e) => setSearchLevel(e.target.value)}
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
                onClick={() => handleClick("")}
                id="bLevel"
                className="shadow-2xl px-3  text-center text-sm border-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FF911A] duration-300"
              >
                limpar
              </button>
            </div>

            <div className="col-span-12 grid grid-cols-12 gap-4  items-center">
              {/* Filtros Laterais */}
              <div className="h-[25rem] col-start-2 grid grid-rows-4 gap-4  items-center">
                <button onClick={() => handleClick("Fresh")}>
                  <Laterais imgUrl="../img/lob1.png" result="/level/rookie" />
                </button>
                <button onClick={() => handleClick("training")}>
                  <Laterais imgUrl="../img/lob2.png" result="/level/rookie" />
                </button>
                <button onClick={() => handleClick("Champion")}>
                  <Laterais imgUrl="../img/lob3.png" result="/level/rookie" />
                </button>
                <button onClick={() => handleClick("Mega")}>
                  <Laterais imgUrl="../img/lob4.png" result="/level/rookie" />
                </button>
              </div>

              {/* Tabela DIGIMONS */}
              <div className="col-span-8 col-start-3 border-2 rounded-xl overflow-auto shadow-2xl h-[25rem] ">
                <div className="grid grid-cols-3 gap-4 p-2 ">
                  {loading ? (
                    <h4>Loading ...</h4>
                  ) : (
                    digimons
                      .filter((digimon) => {
                        if (searchName === "") {
                          return digimon;
                        } else if (
                          digimon.name
                            .toLowerCase()
                            .includes(searchName.toLowerCase())
                        ) {
                          return digimon;
                        }
                      })

                      .filter((digimon) => {
                        if (searchLevel === "") {
                          return digimon;
                        } else if (
                          digimon.level
                            .toLowerCase()
                            .includes(searchLevel.toLowerCase())
                        ) {
                          return digimon;
                        }
                      })

                      .map((digimon) => (
                        <tr className="hover:scale-105 transition-all hover:bg-[#FF911A] h-[4rem] flex  border-2 rounded-full bg-[#4778A6] text-white text-sm">
                          <td className="">
                            {" "}
                            <picture>
                              <img
                                className="border-2 rounded-full w-[4rem] h-full"
                                src={digimon.img}
                                alt=""
                              />
                            </picture>
                          </td>
                          <div className="grid items-center  col-span-2 px-2 ml-1">
                            <td className=" drop-shadow-2xl">
                              {" "}
                              Nome: {digimon.name}
                            </td>
                            <td className="drop-shadow-2xl">
                              {" "}
                              Level: {digimon.level}{" "}
                            </td>
                          </div>
                        </tr>
                      ))
                  )}
                </div>
              </div>

              {/* Filtros Laterais */}
              <div className="h-[25rem] grid grid-rows-4 gap-4  items-center">
                <button onClick={() => handleClick("in training")}>
                  <Laterais imgUrl="../img/lag1.png" result="/level/rookie" />
                </button>
                <button onClick={() => handleClick("rookie")}>
                  <Laterais imgUrl="../img/lag2.png" result="/level/rookie" />
                </button>
                <button onClick={() => handleClick("Ultimate")}>
                  <Laterais imgUrl="../img/lag3.png" result="/level/rookie" />
                </button>
                <button onClick={() => handleClick("Armor")}>
                  <Laterais imgUrl="../img/lag4.png" result="/level/rookie" />
                </button>
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
            <ParticipantButton
              data={{
                img: {
                  src: "../img/taichi.png",
                  alt: "Personagem Taichi Kamiya",
                },
                name: "Taichi Kamiya",
                content:
                  "Tai é enérgico e aventureiro. Ele também age impulsivamente e corre sem pensar nas consequências, especialmente quando seus amigos estão em perigo, mas é rápido em perceber e admitir que ele estava errado.",
                idade: "11 anos",
                ator: "Toshi Fujita",
                parceiro: "Agumon",
                tracos: "Coragem",
                nascionalidade: "Japão",
                ocupacao: "Estudante",
              }}
            />
            <ParticipantButton
              data={{
                img: {
                  src: "../img/koshiro.png",
                  alt: "Personagem Koushiro Izumi",
                },
                name: "Koushiro Izumi",
                content:
                  "Izzy é um especialista em informática e gasta uma grande fração de seu tempo tentando descobrir coisas em seu laptop 'PiBook'. Ele é muito inteligente e experiente, e muitas vezes se perde em pensamentos.",
                idade: "10 anos",
                ator: "Umi Tenjin",
                parceiro: "Tentomon",
                tracos: "Conhecimento",
                nascionalidade: "Japão",
                ocupacao: "Estudante",
              }}
            />
            <ParticipantButton
              data={{
                img: {
                  src: "../img/takeru.png",
                  alt: "Personagem Takeru Takaishi",
                },
                name: "Takeru Takaishi",
                content:
                  "Está no 2 ano de escolaridade. É o irmão mais novo de Yamato. Devido a certas circunstâncias, vive separado dele, mas com o incidente do primeiro episódio, começa a desenvolver uma estranha intuição.",
                idade: "8 anos",
                ator: "Megumi Han",
                parceiro: "Patamon",
                tracos: "Esperança",
                nascionalidade: "Japão",
                ocupacao: "Estudante",
              }}
            />
          </div>
          {/* <!-- Fim Seleção de Personagens --> */}

          {/* <!-- Container da Historia --> */}
          <div className="col-span-8  border-2  shadow-2xl h-[25rem]  gap-4 p-12 flex items-center rounded-3xl">

            {/* <!-- Apresentação --> */}
            <div className="grid grid-cols-12 gap-2 place-items-center items-center">
              <picture className="col-span-3">
                <img
                  className=" h-[23rem]"
                  src="../img/personagem.png"
                  alt=""
                />
              </picture>
              <div className="col-span-9">
                <h2 className=" text-white text-[1.8rem] drop-shadow-2xl  text-center ">
                  Sobre o Anime
                </h2>

                <h2 className=" text-white text-[0.9rem] border-2 rounded-xl p-4 shadow-2xl text-justify bg-[#4778A6] ">
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
            <ParticipantButton
              data={{
                img: {
                  src: "../img/hikari.png",
                  alt: "Personagem Hikari Kamiya",
                },
                name: "Hikari Kamiya",
                content:
                  "Kari é o doce, inocente e alegre irmão mais novo de um Digidestinado. Ela sempre procura o melhor lado das pessoas sem recorrer à violência, mas pode ser séria em situações drásticas.",
                idade: "8 anos",
                ator: "Kae Araki",
                parceiro: "Gatomon",
                tracos: "Luz",
                nascionalidade: "Japão",
                ocupacao: "Estudante",
              }}
            />

            <ParticipantButton
              data={{
                img: {
                  src: "../img/yamato.png",
                  alt: "Personagem Yamato Ishida",
                },
                name: "Yamato Ishida",
                content:
                  "Matt começa como um solitário secreto com um comportamento legal. Ele é maduro, pensativo e equilibrado, e mais propenso a pensar nas coisas do que cobrar de frente. Ele é uma pessoa profundamente carinhosa.",
                idade: "11 anos",
                ator: "Youto Kazama",
                parceiro: "Gabumon",
                tracos: "Amizade",
                nascionalidade: "Japão",
                ocupacao: "Estudante",
              }}
            />
            <ParticipantButton
              data={{
                img: {
                  src: "../img/sora.png",
                  alt: "Personagem Sora Takenouchis",
                },
                name: "Sora Takenouchis",
                content:
                  "Sora é gentil, responsável, carinhosa e protetora, com seu primeiro instinto sendo tentar ajudar os outros de qualquer maneira que puder, muito parecido com uma mãe. Está sempre disposta a ajudar.",
                idade: "11 anos",
                ator: "Yuko Mizutani",
                parceiro: "Biyomon",
                tracos: "Amor",
                nascionalidade: "Japão",
                ocupacao: "Estudante",
              }}
            />
          </div>
          {/* Fim Seleção de Personagens */}
        </div>
      </section>
    </>
  );
};

export default Home;
