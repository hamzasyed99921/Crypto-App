import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from '../Elements/Sidebar'

const Base = (props) => {
  return (
    <>
        <Header/>
        {/* <Sidebar/> */}
        {props.children}
        {/* <Footer/> */}
    </>
  )
}

export default Base