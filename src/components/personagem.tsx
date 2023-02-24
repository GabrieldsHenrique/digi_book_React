import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

interface IProps {
  data: {
    img: {
      src: string;
      alt: string;
    };
    name: string;
    content: string;
    idade: string;
    ator: string;
    parceiro: string;
    tracos: string;
    nascionalidade: string;
    ocupacao: string;
    };
  };


  const ParticipantButton = ({ data }: IProps) => {
    let [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <>
  

            <button
              onClick={() => setIsOpen(true)}
              className="flex  h-full items-center justify-center bg-[#4778A6] border-2 rounded-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#FF911A] duration-300 ">
            <picture><img className=" max-h-[8rem] p-1 " src={data.img.src} alt={data.img.alt}/></picture>
            

            </button>

  
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-10"
        >
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur"
            aria-hidden="true"
          />
  
          <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="p-3 grid grid-cols-12 xl: gap-4 bg-blue-light rounded-2xl w-[50rem] fonte  justify-center items-end ">

                <picture className="col-span-2 md:col-start-1 justify-center items-center"><img src={data.img.src} alt={data.img.alt}/></picture>

                <div className="md:col-span-5 xl:col-span-6 ">
                  <p className=" text-white md:text-[1.7rem] xl:text-[2rem]   text-center "
                  >{data.name}</p>

                  <p className=" text-white md:text-[1rem]  xl:text-[1.2rem]  border-2 rounded-xl p-4 shadow-2xl text-justify bg-[#4778A6] h-72"
                  >{data.content}</p>
                </div>

                <div className="col-span-4 xl:col-span-4 ">
                    <p className=" text-white md:text-[1.7rem]  xl:text-[2rem]     text-center "
                    >Dados:</p>
                    <div className="col-span-4 grid grid-rows-6 gap-2 h-72 items-center">
                      <p className=" text-white md:text-[1rem]  border-2 rounded-xl px-2 py-1 shadow-2xl  bg-[#4778A6]"
                      >Idade: {data.idade}</p>
                      <p className=" text-white md:text-[1rem] border-2 rounded-xl px-2 py-1 shadow-2xl  bg-[#4778A6]"
                      >Ator: {data.ator}</p>
                      <p className=" text-white md:text-[1rem] border-2 rounded-xl   px-2 py-1 shadow-2xl  bg-[#4778A6]"
                      >Parceiro: {data.parceiro}</p>
                      <p className=" text-white md:text-[1rem] border-2 rounded-xl   px-2 py-1 shadow-2xl  bg-[#4778A6]"
                      >Traços: {data.tracos}</p>
                      <p className=" text-white md:text-[1rem] border-2 rounded-xl   px-2 py-1 shadow-2xl  bg-[#4778A6]"
                      >País: {data.nascionalidade}</p>
                      <p className=" text-white md:text-[1rem] border-2 rounded-xl   px-2 py-1 shadow-2xl  bg-[#4778A6]"
                      >Ocupação: {data.ocupacao}</p>
                    </div>
                </div>


             
            <button
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-105 transition-all  "
                >
                  <picture>
                    <img
                      className="w-10 "
                      src="../img/close.svg"
                      alt="seta para baixo"
                    />
                  </picture>
                </button>

          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ParticipantButton;