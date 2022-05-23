import React from "react"
import Logo from "../../../assets/img/jpg/simon.jpg"

import "./MenuTop.scss"

export default function MenuTop(){
  return (
   <div className="menu-top">
      <div className="menu-top_left">
        <img className="menu-top_left-logo" alt="Logo" src={Logo} width="50px" height="50px"></img>
      </div>
      <div className="menu-top_right">
        <h3>Logout</h3>
      </div>
   </div>
  )
}