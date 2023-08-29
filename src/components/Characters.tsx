// API
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Packages and Components
import { CharactersCard } from './CharactersCard';
import { getRickData } from "../features/rickSlice";
// Interfaces
import { CharacterApi } from '../interfaces/rickRestApi';

export const Characters = () => {

    const dispatch = useDispatch<any>();
    const { rickApiData } = useSelector((state: any) => state.rickApi);


    useEffect(() => {
        dispatch(getRickData())
    }, []);



    return(
        <div className="_characters-main-container">
            {rickApiData.map((res: CharacterApi) => (
                <CharactersCard key={res.id} {...res} />
            ))}
        </div>
    )
}