import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const NavbarResponsive = () => {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navbar-responsive-main-container">
            <button className="navbar-responsive-button-menu" onClick={handleMenu}>
                { isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu /> }
            </button>
            {   isMenuOpen &&
                <ul>
                    <li>
                        <Link>All Users</Link>
                    </li>
                    <li>
                        <Link>Search</Link>
                    </li>
                </ul>
            }
            <h1 className="navbar-responsive-title">
                RickApp
            </h1>
        </div>
    )
        
}

