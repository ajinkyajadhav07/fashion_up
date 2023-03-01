import React from 'react'
import {Link } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";


export default function Navbar() {



 
    return (
      <>
     
      <nav className="navbar"> 
    <ul className='list'>
    <li>
      
      <Link to="./Home" ><AiFillHome/>Home</Link>
      </li>
      <li>
      
      <Link to="./Register" ><BiBook/>Register</Link>
      </li>
      <li>
      <Link to='./Login'>  <FiLogIn/> </Link>
      </li>
      <li>
      <Link to='./Signup'> <AiOutlineUserAdd/></Link>
      </li>
    
      <li>
      <Link to='./Cart'> <BsFillCartDashFill/></Link>
      </li>
      
    </ul>
  </nav>
  
  
  </>
    )
    }
  