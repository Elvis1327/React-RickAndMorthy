import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

export const NavbarResponsive = () => {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const navigate = useNavigate();

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigateToUsers = () => {
        setIsMenuOpen(false);
        navigate('/')
    }
    const navigateToSearch = () => {
        setIsMenuOpen(false);
        navigate('/search')
    }

    return (
        <div className="navbar-responsive-main-container">
            <button className="navbar-responsive-button-menu" onClick={handleMenu}>
                { isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu /> }
            </button>
            <ul className={ isMenuOpen ? 'navbar-responsive-ul active' : "navbar-responsive-ul" }>
                <li style={{width: "100%"}} onClick={navigateToUsers}>
                    <Link to='/' className='navbar-responsive-links' >All Users</Link>
                </li>
                <li style={{width: "100%"}} onClick={navigateToSearch}>
                    <Link to='/search' className='navbar-responsive-links'>Search</Link>
                </li>
                </ul>
            <h1 className="navbar-responsive-title">
                RickApp
            </h1>
        </div>
    )
        
}

