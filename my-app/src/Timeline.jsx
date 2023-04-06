import React, { useState }  from "react"
import "./back.css"


export default function Timeline(){


    const [imgs, setimgs] = useState([])

    return<div className="back">
    {imgs.map((e,i)=>{
        return<img src=""></img>
    })}
    </div>
}