import React from 'react'

interface IProps {
  imgUrl : string;
}



const Laterais = ({imgUrl}:IProps) => {

  return (

    <div className="flex items-center  h-full justify-center bg-[#4778A6] p-1 border-2 rounded-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-[#FF911A] duration-300 ">
                <picture><img className=" h-full p-1 max-h-20 " src={imgUrl} alt=""/></picture>
    </div>


  )
}

export default Laterais