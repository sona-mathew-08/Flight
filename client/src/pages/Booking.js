import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

const Booking = () => {
//code to display from backend
    const [flightList, setflightList] = useState([]);

    useEffect(() => {
        
        axios.get("/booking").then((response) => {
            setflightList(response.data);
          });
      }, []);
      

/*
    const flightList=[{
        flightname:"AirIndia Express",
        source:"Istanbul",
        boarding:"10:30",
        boardingdate:"22/10/22",
        //sCode:"IST",
        destination:"Ankara",
        arrival:"1:30",
        arrivaldate:"22/10/22",
        //dCode:"EST"
    },
    {
        flightname:"Indigo",
        source:"Istanbul",
        boarding:"10:30",
        boardingdate:"25/10/22",
        //sCode:"IST",
        destination:"Ankara",
        arrival:"1:30",
        arrivaldate:"26/10/22",
        //dCode:"EST"
    },
    {
        flightname:"Indigo",
        source:"Istanbul",
        boarding:"10:30",
        boardingdate:"25/10/22",
        //sCode:"IST",
        destination:"Ankara",
        arrival:"1:30",
        arrivaldate:"26/10/22",
        //dCode:"EST"
    },
    ]
   */  //above array to display the UI
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