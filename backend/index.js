import express from 'express'
import os from 'os'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import helmet from 'helmet'
import mongoose from 'mongoose'

import fileUpload from "express-fileupload"
import { exit } from 'process'
import { log } from 'console'
import authRoutes from "./routes/auth.js"
const {ChatGPTAPI} = (...args) => import('chatgpt').then(({default: chatgpt}) => chatgpt(...args));


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

app.post('/sync', (req, res) => {
    if(req.method=="POST"){
        console.log("post req")
        let data = req.files["data"] 
        let spacename  = req.body["spacename"]
        log(req.body)
        data.mv("./stored_data/"+spacename+"/"+data.name,(err)=>{
            console.error(err)
        })
        console.log(spacename)
        res.send("File upload success!")
        return
    }
    
    res.send("only POST ALLOWED !")
})


app.use("/auth",authRoutes);


const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL,
  {
    useUnifiedTopology:true,
  }).then(() => {
  app.listen(PORT,() => console.log(`server is running at ${PORT}`,ip))
}).catch((err) => console.log(err,"Did not connect"))