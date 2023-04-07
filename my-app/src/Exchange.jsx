import React, { PureComponent, useEffect } from "react";
import { useState } from "react";
import './exchange.css'

export default function CreateSpace() {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [creatorlist, setcreatorlist] = useState([]);
  useEffect(()=>{
let resp= JSON.parse(localStorage.getItem("store"))
console.log(resp)
if(resp)
setcreatorlist(resp)
  },[])

    function addtolist(){
        setcreatorlist([...creatorlist , {"desc":desc,"name":name}])
        localStorage.setItem("store",JSON.stringify(creatorlist.concat([{"desc":desc,"name":name}])))
        console.log([...creatorlist , {"desc":desc,"name":name}])
    }
    function createfield(){
        let text = prompt("what would you like to say?")

    }


  // function profhandler() {
  //   console.log(prof);
  //   fetch("http://172.16.128.175:3001/auth/logincheck", {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({ username: prof }),
  //   })
  //     .then((val) => {
  //       console.log(val);

  //       addtolist(prof);
  //       setprof("");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert("user not found!");
  //     });
  // }

  return (
   <div className="w-screen h-screen center ">
     <center>
    <div className="spaceCard">
       
        <h2 className="text-2xl text-bold">Discuss your problems and share timeline with others!</h2>
      <ul>
        
    
    <div>
        <br></br>
    <button onClick={addtolist} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">POST</button>
    <br></br>
    </div>
    <br></br>
    <input width={"70px"} onChange={(e)=>{setname(e.target.value)}}  value={name} ></input>
    <br></br>
    <br></br>
    <br></br>
        <textarea className = "inputBox"
          id="profilebox"
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          name="projectName"

       value={desc} ></textarea>
      
      </ul>
     
      </div>
      <div >
      {creatorlist.map((e, i) => {
        return <div  className="mungaru" > <span id="leftmost"><img width={"60px"} src={require("./dollar_53876-25498.jpg")}></img> {Math.ceil(10)} Kreat coins  POSTED BY:<h3>{e.name}</h3></span> {e.desc}
        <button onClick={createfield} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-6 mx-4 px-4 rounded-full">Reply</button>
        </div>;
      })}
      
      </div>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   </div>
    
  );
}
