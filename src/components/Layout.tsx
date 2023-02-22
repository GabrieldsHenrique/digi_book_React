import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface IProps{
    children: React.ReactNode
}

const Layout = ({children} : IProps) => {
  return <>
  <main className='h-full scroll-auto  bg-gradient-to-b from-[#0C3459] via-[#5D9DD9] to-[#12518B] min-h-screen px-14 fonte '>
    <Header></Header>
    {children}
    <Footer></Footer>

</main>
    </>
}

export default Layout