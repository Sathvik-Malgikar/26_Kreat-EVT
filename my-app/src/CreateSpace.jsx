import React from "react";
import { useState } from "react";
import './createspace.css'

export default function CreateSpace() {
  const [prof, setprof] = useState("");
  const [creatorlist, setcreatorlist] = useState([]);

    function addtolist(val){
        setcreatorlist([...creatorlist , val])
        console.log(creatorlist)
    }


  function profhandler() {
    console.log(prof);
    fetch("http://172.16.128.95:3001/auth/logincheck", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ username: prof }),
    })
      .then((val) => {
        console.log(val);

        addtolist(prof);
        setprof("");
      })
      .catch((err) => {
        console.error(err);
        alert("user not found!");
      });
  }

  return (
   <div>

    <p>Create a new space and collaborate with peers. </p>
      <ul className="list-inside">
        <li >Shared assets</li>
        <li >View others timeline</li>
        <li >And more...</li>
    </ul>
    <div>
    <button onClick={profhandler}>add to space</button>
    </div>
       
        <input
          id="profilebox"
          onChange={(e) => {
            setprof(e.target.value);
          }}
       value={prof} ></input>
      

      {creatorlist.map((e, i) => {
        return <span>{i}.{e}</span>;
      })}
   </div>
    
  );
}
