import React from 'react'
import {Link} from "react-router-dom"

import ty from "../images/ty.jpg"



const Thankyou = () => {
  return (
    <div className='thankyou'>
   
    <div className="thankyou-content"> 
    <form action="">
      <div className="thanku"><h2>Thank You!</h2></div>
      <div className="successful"><h4>You have successfully Booked your Tickets.</h4></div>
      <div className="home"><Link to="/"><button type='submit'>Home</button></Link></div>
      </form>
    </div>
    </div>
  )
}

export default Thankyou