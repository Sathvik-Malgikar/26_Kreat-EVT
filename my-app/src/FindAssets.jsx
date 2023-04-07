import React, { useState }  from "react"
import "./assets.css"
import "./output.css"

export default function FindAssets(){

    const [space, setspace] = useState("")
    const [dimg, setdimg] = useState(null)
   
    function getimage(e){

        if(space=='') return


    fetch("http://172.16.128.175:3001/genimage", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ "imgdata": space }),
      }).then(resp=>{
        resp.json().then(data=>{
            console.log(data)
            setdimg(data["url"])
        });
      })

      setdimg("Generating Assets...Please wait")


    }


    return(<div >
    <p className="MAR" >Search for assets based on space</p>
   <input className="MAR"  onChange={(e)=>{setspace(e.target.value)}} value={space} ></input>
   <span onClick={getimage} className="GREEN" >Generate assets</span>

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
   <img src={require("./download.jpeg")}  ></img>
   <a  href="logomaker.com" ><h2>logomaker.com</h2></a>
   </span>
   <span>
   <img src={require("./download.png")}  ></img>
   <a href="https://drive.google.com/file/d/1AfkYHvKD0ftctKMa28Qmsevc4JxsGdLR/view?usp=share_link"  ><h2 className="text-xl"  >A basic beginner template for logo design</h2></a>

   </span>
  
   </div>:space=="lofi music"?<div className="GRID" >
   <span  >
   <img  width={"200px"} src={require("./unnamed.png")}  ></img>
   <a  href="https://drive.google.com/file/d/1eBzy2Po4hcJBiOKAmEUmcB2NZkkPIcOx/view?usp=share_link" ><h1 className="text-xl" >chopped vocals male+female voice for LO-Fi</h1></a>
   </span>
   <span>
   <img width={"200px"} src={require("./unnamed.png")}  ></img>
   <a href="image-line.com"  ><h1>FL studio Docs</h1></a>

   </span>
  
   </div>:<><h3>Enter a space name to find assets and get started!</h3></>}

{dimg==""?<></>:dimg=='Generating Assets...Please wait'?<p>Generating Assets...Please wait</p>:<p>{<img src={dimg} ></img>}</p>}
   <br></br><br></br>
   <br></br><br></br>
    </div>


    )
}