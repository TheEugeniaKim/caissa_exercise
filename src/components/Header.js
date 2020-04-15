import React from 'react'
import Caissa_Logo from '../Caissa_Logo.png'

function Header(){
  return (
    <div className="header">
      <img className="logo" src={Caissa_Logo} alt="Caissa-Logo"/>
    </div>
  )
}

export default Header 