const express = require("express")
const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const cors = require("cors")
const fs = require("fs")

const app = express()
app.use(express.json())
app.use(cors())


app.post("/searchProfile",(request,response)=>{
    const profile = request.body.profile
   
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
        let db = client.db("Kreat-EVT")
        db.collection("Profiles").findOne({profileName:profile},(error,profileFound)=>{
            if(error) throw error
            console.log("Connected to the database") ;
            console.log(profileFound);
            if(profileFound != null){
                
               response.status(200).send(profileFound)
               client.close()
               
            }
            else{
                response.status(400).send(null)
                client.close();
            }
            
        })
    
    })
})

app.listen(3001,console.log("Server running"))