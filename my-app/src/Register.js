import './output.css';

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
return<>
<div className="w-full h- BODY" >

<form action="http://172.16.128.189:3000/profilePage" >
<input name="profilename"  onChange={setprofname} ></input>
<input name="password"  type="password" onChange={setpwd} ></input>
<input  name="email" type="email" onChange={setemail} ></input>
<input name="photo"  type="file" ></input>
<button type="submit" >submit</button>
</form>
</div>

</>
}