import React, { useState } from 'react'
import '../App.css'
import Logo from "../images/logo.png"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"


const Register = () => {
  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:""
  })

  const [err,setError] = useState(null);
  const navigate = useNavigate;

  const handleChange = e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit= async (e) =>{
    e.preventDefault()
    try{
       await axios.post("/register",inputs)
       navigate("/login")
    }catch(err){
      setError(err.response.data);
    }
  }
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
              <input type="text" name='username' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Email</span>
              <input type="email" name='email' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Password</span>
              <input type="password" name='password' onChange={handleChange}/>
          </div>
          <div className="input-bx">
            <button type='submit' onClick={handleSubmit}>Register</button>
            {err&&<p className='error'>{err}</p>}
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