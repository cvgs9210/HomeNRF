import React, { useState } from 'react'
import './Signup.css'
import logo from "../images/logo.png"
import Header from './Header';
import Footer from './Footer';

function Sigup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realizar la petición a la API utilizando fetch
        if (password === confPassword) {
            
            fetch('http://192.168.59.107:3000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name: username,
                    user_pass: password,
                    email: email,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  // Manejar la respuesta de la API
                  alert(data)
                  console.log(data);
                })
                .catch((error) => {
                  // Manejar los errores de la petición
                  console.error(error);
                });
        } else {
            alert("Las contraseñas no coinciden");
        }
    };
    return (
        <>
            <Header />
            <main className='mainS'>
                <div className="signup">
                    <img className="avatarS" src={logo} alt="logo-vgs" />
                    <h1>Sign Up</h1>
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
                        {/* <!-- EMAIL --> */}
                        <label htmlFor="useremail">Email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        {/* <!-- Confirm PASSWORD --> */}
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            required
                        />

                        <input type="submit" value="Sign In" />

                        <a href="/">Lost your password?</a>
                        <a className="signIn" href="/login">
                            I have an account?
                        </a>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Sigup