const express = require('express')
const os = require('os')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const fileUpload = require("express-fileupload")
const { exit } = require('process')
const { log } = require('console')
const {ChatGPTAPI} = (...args) => import('chatgpt').then(({default: chatgpt}) => chatgpt(...args));


async function getkeywords(text) {
  const api = new ChatGPTAPI({
    apiKey: "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"
  })

  const res = await api.sendMessage("Give me keywords related to"+text)
  return res.text
}

const app = express()
const port = 3000

app.use(fileUpload())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const netint = os.networkInterfaces()
if(!netint["Wi-Fi"])
{
    console.log("Wi-Fi is not connected,exiting..");
    exit(1)
}
const ip = netint["Wi-Fi"].slice(-1)[0].address

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

app.listen(port, ip)
console.log(` server up and running, listening at http://${ip}:${port}/`);





