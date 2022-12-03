const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "flight",
    multipleStatements: true
    
});

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
    db.query("SELECT password from User_details where username = '" + username + "'", (err, result) => {
        console.log(result.length);
        if (result.length > 0) {
            if (result[0].password == password)
                return res.json({
                    status: "ok",
                    error: ""
                });
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

app.get("/flight-status/:id",(req,res)=>{
    const {id} = req.params;
    let query="select a.first_name,a.last_name,a.age,a.contact_no,a.travel_class,b.departure,b.destination,b.boarding_time,b.arrival_time,b.boarding_date,b.arrival_date,b.fare,b.dep_terminal,b.des_terminal from passenger_details a join flight_booking_details c on a.passenger_id=c.passenger_id join flight_details b on c.flight_id=b.flight_id where c.passenger_id= ?";
    db.query(query,[id],(err,results) => {
     if(err) {
      return res.status(400).json({err});
    }
     return res.status(200).json(
         { data:results}
     )
    })
 });
 
 /*app.delete("/flight-status/:id",(req,res)=>{
     const {id} = req.params;
     let query="delete passenger_details,flight_booking_details from passenger_details inner join flight_booking_details where passenger_details.passenger_id=flight_booking_details.passenger_id and flight_booking_details.passenger_id=?;";
     db.query(query,[id],(err,results) => {
      if(err){ 
       return res.status(400).json({err});
      }
      return res.status(200).json(
          { message:"deleted"}
      )
     })
  });*/
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