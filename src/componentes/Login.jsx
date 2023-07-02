import React, { useState } from 'react'
import './Login.css'
import md5 from 'md5';
import logo from '../images/logo.png'
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const pass = md5(password);
    const handleSubmit = (e) => {
        e.preventDefault();

        // Realizar la petición a la API utilizando fetch
        fetch(`http://192.168.59.107:3000/users`)
            .then((response) => response.json())
            .then((data) => {
                // Manejar la respuesta de la API
                const User = data.find((user) => user.user_name === username);
                if (User !== undefined && User.user_name === username && User.user_pass === pass) {
                    // alert("OK");
                    setIsLoggedIn(true);
                    navigate('/dispositivos');
                } else {
                    alert("Usuario y/o contraseña invalidos");
                }
                // console.log(data);
            })
            .catch((error) => {
                // Manejar los errores de la petición
                console.error(error);
            });
    };
    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <main className='mainL'>
                <div className="login">
                    <img className="avatarL" src={logo} alt="logo-vgs" />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        {/* <!-- USERNAME --> */}
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        {/* <!-- PASSWORD --> */}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input type="submit" value="Sign In" />

                        <a href="/">Lost your password?</a>
                        <a className="signIn" href="/signup">
                            Don't have an account?
                        </a>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Login