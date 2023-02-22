import React from 'react'

interface IProps {
  imgUrl : string;
}
const Laterais = ({imgUrl}:IProps) => {
  return (
    <>
    <div className="flex  h-full justify-center bg-[#4778A6] border-2 rounded-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#FF911A] duration-300 ">
                <button ><picture><img className=" h-full p-1 " src={imgUrl} alt=""/></picture></button>
    </div>
    </>
  )
}

export default Laterais