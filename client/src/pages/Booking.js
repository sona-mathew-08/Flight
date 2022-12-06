import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Booking = () => {
    const flights=[{
        source:"Istanbul",
        boarding:"10:30",
        sCode:"IST",
        destination:"Ankara",
        arrival:"1:30",
        dCode:"EST"
    },
    {
        source:"Istanbul",
        boarding:"10:30",
        sCode:"IST",
        destination:"Ankara",
        arrival:"1:30",
        dCode:"EST"
    },
    {
        source:"Istanbul",
        boarding:"10:30",
        sCode:"IST",
        destination:"Ankara",
        arrival:"1:30",
        dCode:"EST"
    },
    ]
  return (
    <div className="available-flight-section">
        <div className="tpd-plan">
        <div className="tp-flight-plan">
            <div className="container-fluid">
        
            
            {
                flights.map((flight)=>(
                    // console.log(flight.arrival);
                    <div className="crop depart">
                    <div className="context collapsed" >
                    
                    <div className="item it-1">
                        <label className="trip-type depart">Departure</label>
                        <div className="route-dot">
                            <span className="point" ></span>
                            <span className="point" ></span>
                        </div>
                        
        
                        <div className="port-seg">
                            <div className="flight-seg origin">
                                <div className="time">{flight.boarding}</div>
                                <div className="port" style={{paddingLeft:"10px"}}>{flight.sCode}</div>
                                <div className="name" >{flight.source}</div>
                            </div>
                            <div className="flight-seg destination">
                                <div className="time">{flight.arrival}</div>
                                <div className="port" style={{paddingRight:"10px"}}>{flight.dCode}</div>
                                <div className="name">{flight.destination}</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/booking-form"><button >Book</button></Link>
                
                    </div>
                </div>
                ))
            }
            
            
        
                </div>
            </div>
        </div>
</div>
                                                               
  )
}

export default Booking