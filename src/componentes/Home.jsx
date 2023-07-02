import React from 'react'
import './home.css'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
      // Navegar a una ruta específica al hacer clic
      navigate('/login');
    };

    return (
        <>
            <Header />
            <main className='mainHo'>
                <div>
                    <h2>Bienvenido al Sistema de Monitoreo y Control de Domótica</h2>
                    <p>El sistema de monitoreo y control de domótica es una forma fácil y conveniente de controlar los dispositivos de su hogar. Con nuestro sistema, puede controlar la iluminación, la temperatura, la seguridad y más desde cualquier lugar del mundo.</p>
                    <button onClick={handleClick}>Empezar</button>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home