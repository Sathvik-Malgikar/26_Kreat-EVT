import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react"
import {Link} from 'react-router-dom'
import './input.css'



export default function Register(){
const [profname, setprofname] = useState("")
const [pwd, setpwd] = useState("")
const [email, setemail] = useState("")
const [file, setFile] = useState("")
    // function submit(){

    //     let submitdata={"profileName" : profname,"password" : pwd,"email":email}
    //     fetch("http://172.16.128.175:3001/profilePage",{method : "POST" , body : submitdata, fil})
    // }
    // function handleChange(event) {
    //     setFile(event.target.files[0])
    //   }
    const handleSubmit = ()=>{

    }

    return (
    <div className="w-screen h-screen dark:bg-gray-900 text-center" id='register' >
        <center>
    <div className='registerCard dark:bg-gray-800'>
        <form action="" method = "post">
            <h1 className='text-white text-5xl' id = "registerHead">Register</h1>
            <label className='text-white'>Username : </label><input name="username"  onChange={setprofname} className='py-2'></input><br></br><br></br>
            <label className='text-white'>Password : </label><input name="password"  type="password" onChange={setpwd}className='py-2' ></input><br></br><br></br>
            <label className='text-white'>Email ID : </label><input  name="email" type="email" onChange={setemail} className='py-2'></input><br></br><br></br>
            <label className='text-white'>Profile Picture : </label><input name="photo"  type="file" ></input><br></br><br></br>
            <Link to = '/login'>
            <button  type="submit" className='blue-700 text-white font-bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadowbold py-2 px-4 rounded-full' onClick={handleSubmit}>Submit</button>
            </Link>
        </form >
    </div>
    </center>


    </div>
    )
}

