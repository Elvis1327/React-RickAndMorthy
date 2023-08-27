import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
        {/* Navbar Container */}
        <div className="_main-container-navbar">
            <h1>
                RickApp
            </h1>
            <ul className="_narbar-navigation">
                <Link to='/' className='_navbar-navigation-links'>Home</Link>
                <Link to='/search' className='_navbar-navigation-links'>Search</Link>
            </ul>
        </div>
        </>
    )
}