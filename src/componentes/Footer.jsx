import React from 'react'
import './Footer.css'
import logo from "../images/logo.png"

function Footer() {
    return (
        <>
            <footer className='footerF'>
                <img className='avatarF' src={logo} alt="" />
                <p>Monitoreo y Control de Domótica &copy; 2023</p>
            </footer>
        </>
    )
}

export default Footer