import React from 'react'
import './open.css'
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function Open() {
  return (
    <>
    <div className="container">
        <div className="name">
            <h2 className='name'>feane</h2>
        </div>
        <div className="menu">
            <h3 className='home'>HOME</h3>
            <h3 className='menu'>MENU</h3>
            <h3 className='about'>ABOUT</h3>
            <h3 className='booktable'>BOOK TABLE</h3>
          <Link  
          to = 'login'> <FaUserCircle  className='user' style={{color:'whitesmoke'}}/></Link>
            <FaCartShopping className='shop' style={{color:'whitesmoke'}}/>
            <div className="input">   <input type="text" placeholder='ORDER' className='.input' /></div>
         
        </div>
    
    </div>
    </>
  )
}
