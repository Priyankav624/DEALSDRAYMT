import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {

    return (
        <div className='header'>
            <div></div>
                
            <div className='/dashboard'>
                Home
            </div>

            <Link style={{textDecoration:"none", color:"white"}} to="/employeelist">
                <div className=''>
                    Employee List
                </div>
            </Link>

            <div></div>

            <div className=''>
                Username
            </div>

            <div className=''>
                Logout
            </div>
        
        </div>
    )
}

export default Header

