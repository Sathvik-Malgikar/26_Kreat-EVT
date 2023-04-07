import { Link } from 'react-router-dom';
import "./stndstyles.css"
import React from 'react'
import ReactDOM from 'react-dom'

export default function GetStandalone(){
    console.log("hello")



    return<div className="Flex">
      <Link to={"/"} >
          <p>Go back to home page</p>
        </Link>
        <p className="Msg" >Get the standalone exe run it from your space to start building the Timeline</p>
        <br></br>
        <a href='http://172.16.128.175:3001/getstandalone' >

        <div  className="Button" >Download for windows 64-bit</div>
        </a>
        <p className="Msg" >Get mechvibes (software) and feel the keys as you type (ASMR) .</p>
        <br></br>
        <a href='https://excellmedia.dl.sourceforge.net/project/mechvibes/v2.3.0/Mechvibes.Setup.2.3.0.exe' >

        <div  className="Button" >Download for windows 64-bit</div>
        <h3 className="Msg" >About ASMR</h3>
        <p className="Msg" >ASMR stands for autonomous sensory meridian response; a term used to describe a tingling, static-like, or goosebumps sensation in response to specific triggering audio or visual stimuli. These sensations are said to spread across the skull or down the back of the neck and, for some, down the spine or limbs.
        Use the Software above and experience it for yourself</p>
        </a>
    </div>
}