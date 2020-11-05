import React, { useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';


import { scrollContext } from '../../context';


export const Navbar = () => {

    const location = useLocation()

    const btnInicio = useRef()

    const { nodes } = useContext(scrollContext)

    const { qs, blog, contacto } = nodes;

    const nav_responsive = useRef();


    const handleNavbar = () => {
        nav_responsive.current.classList.toggle('show');
    }

    const handleScroll = (node) => {

        if (location.pathname !== '/') {
            btnInicio.current.click();
        }
    
        node.scrollIntoView({block: "start", behavior: "smooth"});

    }
    


    return (

        <div className="navbar">
            <nav className="navbar-container">
                <div className="logo-bars">
                    <Link to="/" ref= {btnInicio}>
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
                    <p onClick={ () => handleScroll(qs) } > ¿Quiénes somos? </p>
                    <p onClick={ () => handleScroll(blog) } >Blog</p>

                    <Link to="/legislaciones" >
                        <p>Legislaciones</p>
                    </Link>

                    <p onClick={ () => handleScroll(contacto)} > Contacto </p>
                </div>
            </nav>
        </div>
    )
}
     