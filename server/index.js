const express = require("express");
const cors = require("cors");
const mysql=require("mysql");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "Flight",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("INSERT INTO User_details(user_id,username, email, password) SELECT COALESCE(MAX(user_id), 0)+1,'" + username + "','" 
     + email + "','" + password + "' from User_details" ,(err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfull");
            res.send("Values Inserted");
        }
      }
    );
    
});

app.post('/login',(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * from User_details where username = '" + username+ 
    "' AND password = '" + password + "'",
    (err,result) => {
        console.log(result.length);
        if(err)  {
            res.send(err);
        }
        else if(result.length >0) {
            res.send("Successfully logged in");
        }
        else  
            res.send("Wrong username/or password combination!");
        
    }
 )
});


app.listen(8040,() => {
    console.log("server running");
})
