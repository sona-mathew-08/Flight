const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const sessions = require('express-session')


const app = express();
app.use(cors());
app.use(express.json());
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "Flight",
    multipleStatements: true
});
var session;

app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT username from User_details where username='" + username + "'", (err, result) => {
        if (result.length > 0) {
            res.status(409).json("User already exists!");
        } else {
            db.query("INSERT INTO User_details(user_id,username, email, password) SELECT COALESCE(MAX(user_id), 0)+1,'" + username + "','" +
                email + "','" + password + "' from User_details", (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            status: "error",
                            error: err
                        });
                    } else {
                        console.log("Successfull");
                        //res.send("User "+username+" is successfully registered");
                        return res.json({
                            status: "ok",
                            error: ""
                        });
                    }
                }
            );
        }
    })
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT password,user_id from User_details where username = '" + username + "'", (err, result) => {
        console.log(result.length);
        if (result.length > 0) {
            if (result[0].password == password)
            {
                session=req.session;
                session.userid=result[0].user_id;
                return res.json({
                    status: "ok",
                    error: ""
                });
            }
            else {
                res.status(400).json("Wrong username or password!")
            }
        } else {
            return res.status(400).json({
                status: "error",
                error: "Not a registered user"
            });
        }
    })
});

app.post('/booking',async function(req,res) {
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const age = req.body.age;
    const contactno = req.body.contact;
    const flightname = req.body.flight_name;
    const flyingfrom = req.body.source;
    const flyingto = req.body.destination;
    const boardingdate = req.body.date_departure;
    const arrivaldate = req.body.date_arrival;
    //const {userid} = req.params;
    const travelclass = req.body.class;
    var f_id="";
    var p_id="";
    console.log(req.body);
    db.query("SELECT flight_id from flight_details where flight_name='" +flightname+"' and departure='" +flyingfrom+ "' and destination='" +flyingto+"' and boarding_date='" 
    +boardingdate+"' and arrival_date='" +arrivaldate+ "'",(err,result) => {
        if(err){
            console.log(err);
            return res.status(400).json({ status: "error", error: err});
        }
        else{
            if(result.length>0)
            {
                f_id=result[0].flight_id;
                db.query("SELECT passenger_id from passenger_details where first_name='" +firstname+"' and last_name='"+lastname+"'",(err,result) => {
                    if(err){
                        console.log(err);
                        return res.status(400).json({ status: "error", error: err});
                    }
                    else{
                        if(result.length>0){
                            p_id=result[0].passenger_id;
                            db.query("SELECT flight_id,user_id,passenger_id from flight_booking_details where flight_id='" + f_id + "' and user_id='" 
                            + session.userid + "' and  passenger_id='" + p_id +"'",(err,result) =>{
                                if(err){
                                    console.log(err);
                                    return res.status(400).json({ status: "error", error: err});
                                }
                                else{
                                    if(result.length>0){                                
                                        return res.status(400).status(400).json({ status: "error", error: "Tickets already booked!"});
                                    }
                                    else
                                    {
                                        db.query("INSERT INTO flight_booking_details(flight_booking_id, flight_id, user_id, passenger_id) " +
                                        "SELECT COALESCE(MAX(flight_booking_id), 0)+1,'"  + f_id + "','" + session.userid + "','" + p_id +
                                        "' from flight_booking_details" ,(err, result) =>
                                        {
                                            if(err) {
                                                    console.log(err);
                                                    return res.status(400).json({ status: "error", error: err});
                                            } else 
                                            {
                                                    console.log("Successfull");
                                                    //res.send("User "+username+" is successfully registered");
                                                    //return res.status(200).json({ status: "ok", error: "Booked successfully"});
                                                    return res.status(200).json({ status: "OK", error: ""});//Booked successfully'
                                            }
                                        }); 
                                    }
                                }
                            });
                        }
                        else
                        {
                            db.query("INSERT INTO passenger_details(passenger_id, first_name, last_name, age, contact_no,travel_class) SELECT COALESCE(MAX(passenger_id), 0)+1,'" +firstname  + "','" 
                            + lastname + "','" + age + "','" + contactno + "','" +travelclass+ "' from passenger_details" ,(err, result) => 
                            {
                                if(err) {
                                    console.log(err);
                                    return res.status(400).json({ status: "error", error: err});
                                } 
                                else {
                                    console.log("Successfull");
                                    db.query("SELECT passenger_id from passenger_details where first_name='" +firstname+"' and last_name='"+lastname+"'",(err,result) => {
                                        if(err){
                                            console.log(err);
                                            return res.status(400).json({ status: "error", error: err});
                                        }
                                        else{
                                            if(result.length>0)
                                            {
                                                p_id=result[0].passenger_id;
                                                db.query("INSERT INTO flight_booking_details(flight_booking_id, flight_id, user_id, passenger_id) " +
                                                "SELECT COALESCE(MAX(flight_booking_id), 0)+1,'"  + f_id + "','" + session.userid + "','" + p_id +
                                                "' from flight_booking_details" ,(err, result) =>
                                                {
                                                    if(err) {
                                                            console.log(err);
                                                            return res.status(400).json({ status: "error", error: err});
                                                    } else 
                                                    {
                                                            console.log("Successfull");
                                                            //res.send("User "+username+" is successfully registered");
                                                            return res.status(200).json({ status: "OK", error: ""});//Booked successfully'
                                                    }
                                                });
                                            }
                                        }
                                    });                                
                                }

                            });               
                        }                                  
                    }
                    
                });
            }
            else
            {
                return res.status(400).json({ status: "error", error: "flight does not exist"});
            }
        }
    });
});

//Sai
app.get("/booking",(req,res)=>{
    let query="select departure,destination,boarding_time,arrival_time,flight_name from flight_details";
    db.query(query,(err,results) => {
     if(err) {
      return res.status(400).json({err});
    }
     return res.status(200).json(
         { data:results,message:"Displayed"}
     )
    })
 });

app.get("/flight-status/:id",(req,res)=>{
    const {id} = req.params;
    let query="select a.first_name,a.last_name,a.age,a.contact_no,a.travel_class,b.departure,b.destination,b.boarding_time,b.arrival_time,b.boarding_date,b.arrival_date,b.fare,b.dep_terminal,b.des_terminal from passenger_details a join flight_booking_details c on a.passenger_id=c.passenger_id join flight_details b on c.flight_id=b.flight_id where c.passenger_id= ?";
    db.query(query,[id],(err,results) => {
     if(err) {
      return res.status(400).json({err});
    }
     return res.status(200).json(
         { data:results,message:"Displayed"}
     )
    })
 });

 app.delete("/flight-status/:id",(req,res)=>{
    const {id} = req.params;
    let query="delete from flight_booking_details where passenger_id=?;delete from passenger_details where passenger_id=?;";
    db.query(query,[id,id],(err,results) => {
     if(err){ 
      return res.status(400).json({err});
     }
     return res.status(200).json(
         { message:"deleted"}
     )
    })
 })

app.listen(8040, () => {
    console.log("server running");
})