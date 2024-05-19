import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = ({dark}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="navbar">
                <div className="logo h-10" onClick={() => navigate('/')}>
                    {dark ? (
                        <img src='./img/dark-logo.png' alt="Logo Dark Mode" />
                    ) : (
                        <img src="./img/logo.png" alt="Logo Light Mode" />
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
