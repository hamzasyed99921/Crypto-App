import React from 'react'
import Hero from '../components/Elements/Hero'
import Main from '../components/Elements/Main'
import Sections from '../components/Elements/Sections'
import Sidebar from '../components/Elements/Sidebar'

const Home = () => {
  return (
    <>
      <Hero/>
      <div className='d-flex'>
      <Sidebar/>
      <Main/>
      </div>
    </>
  )
}

export default Home