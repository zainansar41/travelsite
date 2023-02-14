import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'

export default function Navbar() {
    let [state, setState] = useState(false)
    const handleClicked = ()=>{
        setState(!state)
    }
    return (
        <nav className="navbar">
            <h2 className="navbar_logo">Tour</h2>
            <div className="menu_icons" onClick={handleClicked} >
            <i class={state ? "fas fa-times" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={state?"nabar_menu active" : "nabar_menu"}>
                <li><Link to={'/'} className='link'><i class="fa-solid fa-house"></i>Home</Link></li>
                <li><Link to={'/service'} className='link'><i class="fa-brands fa-servicestack"></i>Service</Link></li>
                <li><Link to={'/tour'} className='link'><i class="fa-solid fa-location-dot"></i>Tours</Link></li>
            </ul>
        </nav>
    )
}
