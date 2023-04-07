import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import React from 'react'
// import './input.css'



export default function HomePage(){
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate('/Register')
    }
    const handleReg = ()=>{
        navigate('/Register')
    }

    const handleSpace = ()=>{
        navigate('/createspace')
    }

    const handlePrice = ()=>{
        navigate('/price')
    }
    const handleSoftware = ()=>{
        navigate('/standalone')
    }
    return(
        <div className = "bg-white">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a  className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kreat-EVT</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
               
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" >Home</a>
                    </li>
                    <li>
                    <Link to = '/Register'>
                        <a href='http://localhost:3000/Register' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleReg}>Register</a>
                    </Link>
                    </li>
                   
                    <li>
                    <Link to = '/createspace'>
                        <a href='http://localhost:3000/createspace' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleSpace}>Space</a>
                    </Link>
                    </li>
                    <li>
                    <Link to = '/pricing'>
                        <a href='http://localhost:3000/pricing' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handlePrice}>Pricing</a>
                    </Link>
                    </li>
                    <li>
                    <Link to = '/standalone'>
                        <a href='http://localhost:3000/standalone' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleSoftware}>Software</a>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

            
            <h1 className='text-6xl text-center CompName animate-bounce' >KREAT-EVT</h1>
            <div className='getStartedButton'>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ' onClick={handleClick}>Get Started</button>
            </div>

           

        </div>

    )
    
   
    
}