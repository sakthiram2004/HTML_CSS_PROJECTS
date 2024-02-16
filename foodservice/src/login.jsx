import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import './login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  return (
    <>
    <div className="logincontainer">
      <div className="formcontainer">
        <form action="">
          <div className="welcome">
            <h2>Welcome</h2>
          </div>
          <div className="username">
          <FaUserTie className='usericon' style={{color:'yellow'}}/>
            <input type="text" placeholder=' username' />

          </div>
          <div className="pass">
          <RiLockPasswordFill className='passicon' style={{color:'yellow'}}/>
            <input type="password" placeholder='password' />
          </div>
          <div className="submit">
            <button onClick={()=>{
              navigate('/');
            }}>Login</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
