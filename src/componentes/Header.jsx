import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from "../images/logo.png";

function Header(props) {
    const { isLoggedIn } = props;

    return (
        <>
            <header className='headerH'>
                <img className='avatarH' src={logo} alt="" />
                <h1>Monitoreo y Control de Domótica</h1>
                <nav>
                    <ul className='nav_ulH'>
                        <li><Link to="/">Inicio</Link></li>
                        {isLoggedIn && (
                            <>
                                <li><Link to="/dispositivos" type="text" id="devices">Dispositivos</Link></li>
                                <li><Link to="/monitoreo">Monitoreo</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </>
                        )}
                        <li><Link to="/login">{isLoggedIn ? 'Logout' : 'Login'}</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;


// import React from 'react'
// import './Header.css'
// import logo from "../images/logo.png"
// import Home from './Home'

// function Header() {
//     return (
//         <>
//             <header className='headerH'>
//                 <img className='avatarH' src={logo} alt="" />
//                 <h1>Monitoreo y Control de Domótica</h1>
//                 <nav>
//                     <ul className='nav_ulH'>
//                         <li><a href="/">Inicio</a></li>
//                         <li><a href="/dispositivos" type="text" id="devices">Dispositivos</a></li>
//                         <li><a href="/monitoreo">Monitoreo</a></li>
//                         <li><a href="/contacto">Contacto</a></li>
//                         <li><a href="/login">Login</a></li>
//                     </ul>
//                 </nav>
//             </header>
//         </>
//     )
// }

// export default Header