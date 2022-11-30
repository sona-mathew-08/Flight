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
    
    db.query("SELECT username from User_details where username='" + username + "'",(err,result) => {
        if(result.length > 0){
            return res.json({ status: "error", error: "User "+username+" is already registered"});
        }
        else{
            db.query("INSERT INTO User_details(user_id,username, email, password) SELECT COALESCE(MAX(user_id), 0)+1,'" + username + "','" 
            + email + "','" + password + "' from User_details" ,(err, result) => {
            if(err) {
                    console.log(err);
                    return res.json({ status: "error", error: err});
            } else {
                    console.log("Successfull");
                    //res.send("User "+username+" is successfully registered");
                    return res.json({ status: "ok", error: ""});
            }
        }
      );
    }    
    })
});

app.post('/login',(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT password from User_details where username = '"+username+"'",(err,result) => 
    {
        console.log(result.length);
        if(result.length >0) {
            if(result[0].password==password)
                return res.json({ status: "ok", error: ""});
            else{
                return res.json({ status: "error", error: "Invalid password"});
            }
        }
        else{
            return res.json({ status: "error", error: "Not a registered user"});
        }
    }
)
});


app.listen(8040,() => {
    console.log("server running");
})
