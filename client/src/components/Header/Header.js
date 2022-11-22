import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-search'>
    <form className="header-search-form" action = "" method = "">
			<div>
				<input class = "search-form from" type = "text" name = "source" placeholder = "From" required/>
			</div>
			<div class="switch-places"></div>
			<div class="to">
				<input class = "search-form" type = "text" name = "dest" placeholder = "Destination" required/>
			</div>
			<div class="date">	
				
				<input class = "search-form" type = "date" name = "depDate" placeholder = "Departure Date"  />
			</div>
			<div class="options">
				<input class = "search-form" type = "number" name = "totalPeople" placeholder = "No. Of People" required min = "1"/>
			</div>
			<button class="search-button btn " type="submit" data-metric="search-form submit">Find</button>
		</form>
    </div>
  )
}

export default Header