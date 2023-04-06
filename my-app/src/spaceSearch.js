import React,{Component, component} from "react"
import {Link} from "react-router-dom"

import { getProfiles } from "./api/axiosSpace"
import { useState,useEffect } from "react"

import SearchBar from "./searchBar"


function SpaceSearch(){
    const [profiles,setProfiles] = useState([])
    const [searchResult,setSearchResult] = useState([])

    useEffect(()=>{
        getProfiles().then(json =>{
            setProfiles(json)
            return json
        }).then(json =>{
            setSearchResult(json)
        })

    },[])

    return (<>
        <SearchBar profiles = {profiles} setSearchResult = {setSearchResult}></SearchBar>

    </>)
}

export default SpaceSearch