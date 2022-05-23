import React from "react"
import Logo from "../../assets/img/png/logo.png"

import "./MenuTop.scss"

export default function MenuTop(){
  return (
   <div className="menu-top">
      <div className="menu-top_left">
        <img className="menu-top_left-log" alt="Logo" src={Logo} width='55px' height='55px'></img>
      </div>
      <div className="menu-top_right">
        <h3>Logout</h3>
      </div>
   </div>
  )
}