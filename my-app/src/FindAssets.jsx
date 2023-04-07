import React, { useState }  from "react"
import "./assets.css"


export default function FindAssets(){

    const [space, setspace] = useState("")
   

    return<div >
    <p>Search for assets based on space</p>
   <input onChange={(e)=>{setspace(e.target.value)}} value={space} ></input>
  {space=='desert battle'? <div className="GRID" >
   <span  >
    <img src={require("./beach-5243072__340.jpg")}  ></img>
   <a  href="https://drive.google.com/file/d/1Vwd3yni3D4y8kg2dWi5wbj1xt2kEva_w/view?usp=share_link" ><h2>Sand dunes textures .Tga</h2></a>
   </span>
   <span>
   <img src={require("./camel-desert-260nw-1334723237.jpg")}  ></img>
   <a href="https://drive.google.com/file/d/1Vwd3yni3D4y8kg2dWi5wbj1xt2kEva_w/view?usp=share_link"  ><h2>Camel.Obj for games</h2></a>

   </span>
   <div>
   <img src={require("./plants_0006_sphere_600.png")}  ></img>
   <a  href="https://drive.google.com/file/d/1as3Z0j7PGHSSJmsCDcRRuHKaYtg_Czur/view?usp=share_link" ><h2>Cactus texture .Tga free to use</h2> </a>

   </div>
   </div>:space=='app logo design'?<div className="GRID" >
   <span  >
    
   <a  href="logomaker.com" ><h2>logomaker.com</h2></a>
   </span>
   <span>
   <img src={require("./download.png")}  ></img>
   <a href="https://drive.google.com/file/d/1AfkYHvKD0ftctKMa28Qmsevc4JxsGdLR/view?usp=share_link"  ><h2>A basic beginner template for logo design</h2></a>

   </span>
  
   </div>:space=="music-lofi"?<div className="GRID" >
   <span  >
    
   <a  href="https://drive.google.com/file/d/1eBzy2Po4hcJBiOKAmEUmcB2NZkkPIcOx/view?usp=share_link" ><h2>chopped vocals male+female voice for LO-Fi</h2></a>
   </span>
   <span>
   
   <a href="image-line.com"  ><h2>FL studio Docs</h2></a>

   </span>
  
   </div>:<><h3>Enter a space name to find assets and get started!</h3></>}
    </div>
}