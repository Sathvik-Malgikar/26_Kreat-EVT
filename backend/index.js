import express from 'express'
import os from 'os'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import helmet from 'helmet'
import mongoose from 'mongoose'
import fs from 'fs'
import { predict } from './api/dall-e.js'
import fileUpload from "express-fileupload"
import { exit } from 'process'
import cloudinary from "cloudinary"
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
const {ChatGPTAPI} = (...args) => import('chatgpt').then(({default: chatgpt}) => chatgpt(...args));


cloudinary.config({ cloud_name: 'dbdusuqpn', api_key: '866851888363871', api_secret: 'X-9yVuA8MouOT5GwzAbsck34JPA', secure: false });


async function getkeywords(text) {
  const api = new ChatGPTAPI({
    apiKey: "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"
  })

  const res = await api.sendMessage("Give me keywords related to"+text)
  return res.text
}
/*CONFIG*/
dotenv.config()
const app = express()
app.use(fileUpload())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
// parse application/json
app.use(bodyParser.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(cors())


const netint = os.networkInterfaces()
if(!netint["Wi-Fi"])
{
    console.log("Wi-Fi is not connected,exiting..");
    exit(1)
}
const ip = netint["Wi-Fi"].slice(-1)[0].address


/* ROUTES */
app.get('/', (req, res) => {
  res.send('Kreat-EVT')
})

app.get('/getstandalone', (req, res) => {
  res.sendFile(path.join(__dirname,"/timeline.exe"))
})

app.post('/getkeywords', (req, res) => {
    let text  = req.body.text
    getkeywords(text).then((data=>{
        res.send(data)
    }))

})
app.post('/genimage', (req, res) => {
    let text  = req.body.imgdata;
    console.log(text,"genimg")
    predict(text).then( (value) =>{
      res.status(200).json({url:value})
      }
    ).catch((err) => {
      res.status(400).json({error:err.message})
    })
    

})


let counter=0
app.post('/sync', (req, res) => {
    if(req.method=="POST"){
        console.log("post req")
        let data = req.files["data"] 
        let spacename  = req.body["spacename"]
        console.log(req.body)
        fs.mkdirSync("./stored_data/"+spacename,{recursive : true})
        data.mv("./stored_data/"+spacename+"/"+data.name,(err)=>{
            console.error(err)
        })
        counter++;
        cloudinarycall(counter,"./stored_data/"+spacename+"/"+data.name).then((val)=>{
          if(val)res.send("File upload success!")
        })
        console.log(spacename,"is the spacename")
        
        return
    }
    
    res.send("only POST ALLOWED !")
})


async function cloudinarycall(id,name){
  
  return cloudinary.v2.uploader.upload(name) .then(result=>{console.log(result,"is result of cloudinary");return true}).catch(err=>{console.error(err);return false});

}


app.use("/auth",authRoutes);

app.use("/users",usersRoutes);


const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL,
  {
    useUnifiedTopology:true,
  }).then(() => {
  app.listen(PORT,() => console.log(`server is running at ${PORT}`,ip))
}).catch((err) => console.log(err,"Did not connect"))