import React from 'react'
import { useState } from 'react';
import { Component } from 'react';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';


function searchProfile(){
    return (
        <div>
            <input type = "text" onChange={handleChange}></input>
            <button>Submit</button>
        </div>
    )
}