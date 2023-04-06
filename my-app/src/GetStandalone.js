import { Link } from 'react-router-dom';
import "./stndstyles.css"

export default function GetStandalone(){
    console.log("hello")
    return<div className="Flex">
      <Link to={"/"} >
          <p>Go back to home page</p>
        </Link>
        <p className="Msg" >Get the standalone exe run it from your space to start building the Timeline</p>
        <br></br>
        <div className="Button" >Download for windows 64-bit</div>
    </div>
}