import React, { useState }  from "react"
import "./back.css"
import { Link } from "react-router-dom"
import FindAssets from "./FindAssets"


export default function Timeline(){


    const [imgs, setimgs] = useState([])

    return<div className="back">
    <h5 className="PAD" >You have 20 Kreat-COINS </h5>

    <h3 className="PAD">Hello User, these are your spaces sorted on  a priority basis</h3>
    <table className="spaceCard" >
        <tr>
            Desert battle (5 members)
        </tr><br></br>
        <tr>
          Lofi music production (2 members)
        </tr>
    </table><br></br>
    <Link  to={"/FindAssets"}><button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Find related assets now- </button></Link>
     <br></br>   </div>
}