import React from 'react'
import '../App.css'
import Logo from "../images/logo.png"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='login'>
    <div className="login-bg">
    <img src={Logo} alt="" />
    </div>
    <div className="login-content">
      <div className="form-bx">
        <h2>Register</h2>
        <form action="">
        <div className="input-bx">
              <span>Username</span>
              <input type="text" name='username' />
          </div>
          <div className="input-bx">
              <span>Email</span>
              <input type="email" name='email' />
          </div>
          <div className="input-bx">
              <span>Password</span>
              <input type="password" name='password' />
          </div>
          <div className="input-bx">
            <button type='submit'>Register</button>
          </div>
          <div className="input-bx">
            <p>Already have an account?<span><Link to="/login">Login</Link></span></p> 
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register