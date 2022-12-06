import React from 'react'
import { Link } from 'react-router-dom'
import "./Empty.css"


const Empty = () => {
  return (
    <div className="empty-container">
        <div id="error-box">
           
            <div class="face">
                <div class="eye"></div>
                <div class="eye right"></div>
                <div class="mouth sad"></div>
            </div>
            <div class="shadow move"></div>
            <div class="message"><h1 class="alert">No booked flights</h1></div>
            <button class="button-box"><Link className="link" to="/booking"><h1 class="red">Book Flight</h1></Link></button>
        </div>
    </div>
  )
}

export default Empty