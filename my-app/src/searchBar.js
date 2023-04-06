import React,{Component, component} from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchBar = (profiles,setSearchResult) => {
    const handleSubmit = (event) =>{
        event.preventDefault()
    }
    const handleSearchChange = (event) =>{
        if(!event.target.value) return setSearchResult(profiles)

        const resutlArray = profiles.filter(profile => profile.title.includes(event.target.value) || profile.body.includes(event.target.value))

        setSearchResult(resutlArray)

    }
    return (
       <header>
            <form className="searchProfiles" onClick={handleSubmit}>
                <input className="searchInput" type = "text" onChange={handleSearchChange} id = "search"></input>
                <button className="searchButton">
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>

            </form>

       </header>
    )
}

export default SearchBar

