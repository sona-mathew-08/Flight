import React, { useEffect, useState } from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaPlaneDeparture,FaPlaneArrival,FaPlane,FaCalendarCheck,FaClock,FaCity,FaRupeeSign}  from "react-icons/fa"
import { Link } from 'react-router-dom'
import './FlightStatus.css'
import axios from 'axios'
import Empty from '../components/Empty/Empty'

const FlightStatus = () => {
   const[flightStatus,setFlightStatus]=useState([])
  /*  const flightStatus=[{
        source:"Mumbai",
        types:"Departure Details",
        typed:"Arrival Details",
        boardingdate:"Fri Oct 26 2022",
        arrivaldate:"Fri Oct 26 2022",
        boardingairport:"Chhatrapati Shivaji Maharaj T2",
        arrivalairport:"John F. Kennedy",
        boardingtime:"18:00:00",
        destination:"New York",
        arrivaltime:"21:00:00",
        boardingcity:"Mumbai,India",
        arrivingcity:"New York,United States",
        price:"19000",
        passdetails:"Passenger Details",
        fname:"Sona",
        lname:"Mathew",
        age:"20",
        travelclass:"Business",
        contact:"123456"
    },
    
    ]
    */

    useEffect(() => {
        console.log("useeffect");
      axios.get("/flight-status").then((response) => {
        console.log("in");
          setFlightStatus(response.data);
          console.log(flightStatus);
        });
    }, []);
      //ithil eth useEffect function aan work aakane enn nokkanam  
    
    /*useEffect(() => {
      const fetchFlights= async () =>{
        const res = axios.get("/flight-status/");
        setFlightStatus(res.data);
      }
      fetchFlights()
    },[]);*/
  /*useEffect(async()=>{
     try{
       const data= (await axios.get("/flight-status")).data
       setFlightStatus(data)
     }catch(err){
       console.log(err);
     }
   },[])*/
   
   const deleteFlight = (e,id) => {
    e.preventDefault();
    axios.delete(`/passengerdelete/${id}`).then((response) => {
      setFlightStatus(
        flightStatus.filter((val) => {
          return val.id !== id;
        })
      );
    });
    window.location.reload();
  };

  return (
    <div className="available-flight-section">
        <div className="tpd-plan">
        <div className="tp-flight-plan">
            <div className="container-fluid">
            {flightStatus.length===0&& <Empty/>}
            
            {
                flightStatus && flightStatus.map((flight)=>(
                    // console.log(flight.arrival);
                    <div className="crop depart">
                    <div className="context collapsed" >
                    
                    <div className="item it-1">
                        <label className="trip-type depart">Ticket Details</label>
                             
                        <div className="port-seg">
                            <div className="flight-seg-origin">
                              
                              <div className="source" style={{paddingTop:"15px",paddingLeft:"25px",paddingRight:"25px"}}>
                              <h2>{flight.departure}</h2>  
                              <FaPlane size="2rem" color='white' style={{paddingLeft:"285px"}}/>                                               
                              </div>
                                                            
                              <div className="types" style={{paddingLeft:"25px",paddingBottom:"15px",paddingRight:"25px"}}>
                                Departure Details</div>                              
                              <div className="boardingdate" style={{paddingTop:"10px",paddingLeft:"25px",paddingRight:"25px"}}>
                                <FaCalendarCheck size="1rem" color='white'/>{' '}{flight.boarding_date}</div>                             
                                                         
                              <div className="boardingtime" style={{paddingLeft:"25px",paddingRight:"25px"}}>
                                <FaClock size="1rem" color='white'/>{' '}{flight.boarding_time}</div> 

                              <div className="boardingairpot" style={{paddingLeft:"25px",paddingRight:"25px"}}>
                                <FaPlaneDeparture size="1rem" color='white'/>{' '}{flight.dep_terminal}</div>   

                              <div className="boardingcity" style={{paddingLeft:"25px",paddingRight:"25px"}}>
                                <FaCity size="1rem" color='white'/>{' '}{flight.departure}</div>        

                              <div className="price" style={{paddingLeft:"25px",paddingTop:"50px",paddingRight:"25px"}}>Price=
                              <FaRupeeSign size="0.7rem" color='white'/>{flight.fare}</div>  

                              <hr style={{color:"white"}}/>
                              <div className="passdetails" style={{paddingLeft:"25px",paddingBottom:"15px",paddingRight:"25px",paddingTop:"25px"}}>
                                Passenger Details</div> 
                              <div className="name" style={{paddingLeft:"25px",paddingRight:"25px"}}>Name :{' '}{flight.first_name}
                                {' '}{flight.last_name}</div> 
                                <div className="age" style={{paddingLeft:"25px",paddingRight:"25px"}}>Age  :
                                {' '}{flight.age}</div> 
                                <div className="phone" style={{paddingLeft:"25px",paddingRight:"25px"}}>
                                Phone:{' '}{flight.contact_no}</div> 
                                <div className="travelclass" style={{paddingLeft:"25px",paddingRight:"25px"}}>
                                Class:{' '}{flight.travel_class}</div> 

                            </div>

                            <div className="flight-seg-destination">
                            <div className="destination" style={{paddingTop:"15px",paddingLeft:"110px",paddingBottom:"2rem"}}>
                                <h2>{flight.destination}</h2></div>
                     
                            <div className="typed" style={{paddingLeft:"110px",paddingBottom:"15px"}}>Arrival Details</div>

                            <div className="arrivaldate" style={{paddingLeft:"110px",paddingTop:"15px"}}>
                                <FaCalendarCheck size="1rem" color='white'/>{' '}{flight.arrival_date}</div>

                            <div className="arrivaltime" style={{paddingLeft:"110px"}}>
                                <FaClock size="1rem" color='white'/>{' '}{flight.arrival_time}</div>

                            <div className="arrivalairport" style={{paddingLeft:"110px"}}>
                                <FaPlaneArrival size="1rem" color='white'/>{' '}{flight.des_terminal}</div>
                           
                            <div className="arrivingcity" style={{paddingLeft:"110px"}}>
                                <FaCity size="1rem" color='white'/>{' '}{flight.destination}</div>
                                <hr style={{color:"white",marginTop:"68px"}}/>
                            </div>
                        </div>
                    </div>
                   <div className='buttn'>
                   
                    <button type='submit' onClick={(e) => { 
                      deleteFlight(e,flight.passenger_id);
                      }}><h3>Cancel</h3></button>
                    </div>
                
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

export default FlightStatus