import './output.css';
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react"

export default function Register(){
const [profname, setprofname] = useState("")
const [pwd, setpwd] = useState("")
const [email, setemail] = useState("")
const [file, setFile] = useState("")
    // function submit(){

    //     let submitdata={"profileName" : profname,"password" : pwd,"email":email}
    //     fetch("http://172.16.128.189:3000/profilePage",{method : "POST" , body : submitdata, fil})
    // }
    // function handleChange(event) {
    //     setFile(event.target.files[0])
    //   }
return (<div className="w-screen h-screen BODY p-10" >

<form action="http://172.16.128.95:3001/auth/register" method='POST' className='border rounded shadow-sm w-10 ' >
<input name="username"  onChange={(e)=>{setprofname(setprofname)}} ></input><br></br>
<input name="password"  type="password" onChange={(e)=>{setpwd(e.target.value)}} ></input><br></br>
<input  name="email" type="email" onChange={(e)=>{setemail(e.target.value)}} ></input><br></br>
<input name="photo"  type="file" ></input><br></br>
<button type="submit" >submit</button><br></br>
</form>
</div>)


}