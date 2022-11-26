import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {FaPlaneDeparture,FaCheckCircle}  from "react-icons/fa"
const Header = () => {
  return (
	<div className='header'>
	<Link className='link' to="/booking">
		<div className="book">
			<FaPlaneDeparture size="2rem" color='var(--mainColor)'/>
			<h4>Book Flight</h4>
		</div>
	</Link>
	<Link className=" link"to="/flight-status">
		<div className='check-booked'>
			<FaCheckCircle size="2rem" color='var(--mainColor)'/>
			<h4>Check Flight Status</h4>
		</div>
		</Link>
		</div>
  )
}

export default Header