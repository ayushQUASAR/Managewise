import React from 'react'
import Header from '../Header/Header'
import Middle from '../Middle/Middle'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <Header/>
        <Middle/>
        <Footer/>
    </div>
  )
}

export default Home