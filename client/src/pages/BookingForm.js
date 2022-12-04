import React, { useState } from 'react'
import axios from 'axios'
import './Booking.css'

//import Logo from "../images/logo.png"
import {Link, Navigate} from "react-router-dom"
import { FaSortAlphaDownAlt } from 'react-icons/fa'

const Booking = () => {

  const [inputs,setInputs]=useState({
    fname:"",
    lname:"",
    age:"",
    contact:"",
    source:"",
    destination:"",
    date_departure:"",
    date_arrival:"",

    class:""
  })
  const [error,setError]= useState(null)

  const handleSubmit= async (e) =>{

    e.preventDefault()
    alert('Would you like to confirm your Ticket?')
    try{
       await axios.post("/booking/",inputs)
       Navigate("/thankyou")
    }catch(err){
      setError(err.response.data);
    }
  }
  
  const handleChange = e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  return (
    <div className='booking'>
     
    <div className="book-content">
      <div className="form-bx">
        <h2>Booking</h2>
        <form action="">
        <div className="input-bx">
              <span>First Name </span>
              <input type="text" name='fname' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Last Name </span>
              <input type="text" name='lname' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Age </span>
              <input type="text" name='age' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Contact No </span>
              <input type="text" name='contact' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Flight Name </span>
              <input type="text" name='flight_name' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Flying From </span>
              <input type="text" name='source' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Flying To </span>
              <input type="text" name='destination' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Date Of Departure</span>
              <input type="date" name='date_departure' onChange={handleChange}/>
          </div>
          <div className="input-bx">
              <span>Date Of Arrival</span>
              <input type="date" name='date_arrival' onChange={handleChange}/>
          </div>
          <div className="input-grp">
              <span>Travel Class </span>
              <select class="custom-select" name='class' onChange={handleChange}>
              <option name="class" value={"1"}>First Class</option>
              <option name="class" value={"2"}>Business</option>
              <option name="class" value={"3"}>Economy</option>
              </select>
          </div>
          
          <div className="input-bx"> 
          <Link to="/thankyou">
            <button type='submit' onClick={handleSubmit} >
              
                <h4>Book Ticket</h4></button>
                </Link>
          </div>
         
        </form>
      </div>
    </div>
    </div>
  )
}


export default Booking