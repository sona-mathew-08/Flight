import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Booking = () => {
    
    const flightList=[{
        flightname:"AirIndia",
        source:"New Delhi,India",
        boarding:"15:30",
        boardingdate:"26/10/2022",
        //sCode:"IST",
        destination:"Los Angeles,United States",
        arrival:"23:00",
        arrivaldate:"26/10/22",
        //dCode:"EST"
    },
    {
        flightname:"Emirates",
        source:"Cochin,India",
        boarding:"18:00",
        boardingdate:"27/10/2022",
        //sCode:"IST",
        destination:"London,United Kingdom",
        arrival:"22:00",
        arrivaldate:"27/10/2022",
        //dCode:"EST"
    },
    {
        flightname:"Air India",
        source:"Mumbai,Indial",
        boarding:"14:00",
        boardingdate:"27/10/2022",
        //sCode:"IST",
        destination:"Ney York,United States",
        arrival:"22:00",
        arrivaldate:"27/10/2022",
        //dCode:"EST"
    },
    ]
   //above array to display the UI
  return (
    <div className="available-flight-section">
        <div className="tpd-plan">
        <div className="tp-flight-plan">
            <div className="container-fluid">
        
            
            {
                flightList.map((flight)=>(
                    // console.log(flight.arrival);
                    <div className="crop depart">
                    <div className="context collapsed" >
                    
                    <div className="item it-1">
                        <label className="trip-type depart">{flight.flightname}</label>
                        <div className="route-dot">
                            <span className="point" ></span>
                            <span className="point" ></span>
                        </div>
                        
        
                        <div className="port-seg">
                            <div className="flight-seg origin">
                                <div className="time">{flight.boardingdate}</div>
                                <div className="port" style={{paddingLeft:"10px"}}>{flight.boarding}</div>
                                <div className="name" >{flight.source}</div>
                            </div>
                            <div className="flight-seg destination">
                                <div className="time">{flight.arrivaldate}</div>
                                <div className="port" style={{paddingRight:"10px"}}>{flight.arrival}</div>
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