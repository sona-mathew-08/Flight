import React from 'react'

import './Booking.css'

//import Logo from "../images/logo.png"
import {Link} from "react-router-dom"
import { FaSortAlphaDownAlt } from 'react-icons/fa'

const Booking = () => {
  return (
    <div className='booking'>
     
    <div className="book-content">
      <div className="form-bx">
        <h2>Booking</h2>
        <form action="">
        <div className="input-bx">
              <span>First Name </span>
              <input type="text" name='fname' />
          </div>
          <div className="input-bx">
              <span>Last Name </span>
              <input type="text" name='lname' />
          </div>
          <div className="input-bx">
              <span>Age </span>
              <input type="text" name='age' />
          </div>
          <div className="input-bx">
              <span>Contact No </span>
              <input type="text" name='contact' />
          </div>
          <div className="input-bx">
              <span>Flying From </span>
              <input type="text" name='source' />
          </div>
          <div className="input-bx">
              <span>Flying To </span>
              <input type="text" name='destination'/>
          </div>
          <div className="input-bx">
              <span>Date Of Departure</span>
              <input type="date" name='date' />
          </div>
          <div className="input-grp">
              <span>Travel Class </span>
              <select class="custom-select">
              <option value={"1"}>First Class</option>
              <option value={"2"}>Business</option>
              <option value={"3"}>Economy</option>
              </select>
          </div>
         
          <div className="input-bx"> 
      
            <button type='submit' >
              
                Book Ticket</button>
          </div>
         
        </form>
      </div>
    </div>
    </div>
  )
}


export default Booking