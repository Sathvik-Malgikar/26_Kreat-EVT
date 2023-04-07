import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import React from 'react'
import './input.css'



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
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a  className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kreat-EVT</span>
                </a>
                
                <div  id="navbar-default">
                <ul className="font-medium flex flex-col p-6 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-4 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4  px-5 rounded-full' onClick={handleReg}>Register</button>

                    </li>

                    <li>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-full' onClick={handlePrice}>Pricing</button>

                    </li>

                    <li>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-full' onClick={handleSpace}>Create Spaces</button>

                    </li>

                    <li>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-full' onClick={handleSoftware}>GetSoftware</button>

                    </li>
                    
                </ul>
                </div>
            </div>
            </nav>

            
            <h1 className='text-6xl text-center CompName animate-bounce'>KREAT-EVT</h1>
            <div className='getStartedButton'>
                <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ' onClick={handleClick}>Get Started</button>
            </div>

           

        </div>

    )
    
   
    
}