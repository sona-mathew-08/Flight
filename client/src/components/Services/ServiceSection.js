import React from 'react'
import './Services.css'
import { serviceItemData } from './ServiceItemData'
import {FaHamburger, FaPlane,FaBriefcase} from "react-icons/fa";
const Services = () => {
  return (
    <div>
    <section class="flight-service">
    <h3>Our Services</h3>
    
    <div className="services-grid">
      <div className="service service1">
        <FaHamburger size="3rem" color='var(--mainColor)'/>
        <h4>Food and Beverage</h4>
        <p>Hungry?Pre-book from an exclusive menu of delectable preparations of local hits from kitchens and streets around the world, specially created by the chefs at our brand new Food Lab. Made today. Served today. Bon appétit!
        </p>
        
      </div>
  
      <div className="service service2">
        <FaBriefcase size="3rem" color='var(--mainColor)'/>
        <h4>Baggage</h4>
        <p>Passengers can book pre-paid excess baggage up to 1 hour prior to the scheduled departure of their domestic flight and 2 hour prior to the scheduled departure of their International flight, on the Website or through IndiGo’s call centre’
        </p>
        
      </div>
  
      <div className="service service3">
        <FaPlane size="3rem" color='var(--mainColor)'/>
        <h4>Airport Services</h4>
        <p>Saving time and making your flying experience seamless is our priority. With our Fast Forward service, you can enjoy priority check-in and priority baggage handling service.Skip the queue and get anytime boarding</p>
        
      </div>
      
    </div>
  </section>


    
    {/*
    <section>
      <h3>Our Services</h3>

      <p classNameName="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <div classNameName="services-grid">
            {serviceItemData.map((service)=>{
              <div classNameName="service service1">
                
                <h4>{service.heading}</h4>
                <p>{service.description}</p>
                
              </div>
            })}
            
          </div>

</section>
          */}

          
    </div>
  )
}

export default Services