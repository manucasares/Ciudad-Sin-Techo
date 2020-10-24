import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const nav_responsive = useRef();

    const handleNavbar = () => {
        nav_responsive.current.classList.toggle('show');
    }

    return (
        <div className="navbar">
            <nav className="navbar-container">
                <div className="logo-bars">
                    <Link to="/">
                        <img
                            src={require(`../../assets/logo.png`)}
                            alt="logo ciudad sin techo"
                        />
                    </Link>
        
                    <i 
                        onClick={handleNavbar}
                        className="fas fa-bars pointer"
                    ></i>
                </div>
    
                <div
                    ref={nav_responsive}  
                    className="nav-items"
                >
                    <p>¿Quiénes somos?</p>
                    <p>Blog</p>
                    <p>Legislaciones</p>
                    <p>Contacto</p>
                </div>
            </nav>
        </div>
    )
}
     