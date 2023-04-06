import React from 'react'
import { useState } from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';


function searchProfile(){
    const [profile,setProfile] = useState("")
    let profileName,profileID
    
    const search = ()=>{
        Axios.post("http://localhost:3001/searchProfile",{profileName:profile}).then((response)=>{
            console.log(response)
            // check for response
            if(!response){
                profileName = response.profileName
                profileID = response.profileID
            }
            else{
                profileName = ""
                profileID = ""
            }

        })
    }
    
    return (
        <div>
            <input type = "text" onChange={(e)=>{setProfile(e.target.value)}}></input>
            <button onClick={search}>Submit</button>

            <div class="mainbg0 d-flex flex-row justify-content-center">
                    <div>
                        <label>Profile Name :</label>
                        <h2>{profileName}</h2>
                        <label>Profile ID :</label>
                        <h2>{profileID}</h2>
                        
                    </div> 
            </div>

        </div>
    )
}

export default searchProfile