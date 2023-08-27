import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../shared/Navbar';
import { SearchRick } from '../components/SearchRick';
import { Users } from '../components/Users'



export const RootRouter = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Users / >}  />
                <Route path='/search' element={<SearchRick / >}  />
            </Routes>
        </BrowserRouter>
    )
}


