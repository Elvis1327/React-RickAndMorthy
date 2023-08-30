import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../shared/Navbar';
import { SearchRick } from '../components/SearchRick';
import { Characters } from '../components/Characters'



export const RootRouter = () => {
    return(
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Characters / >}  />
                <Route path='/search' element={<SearchRick / >}  />
            </Routes>
        </BrowserRouter>
    )
}


