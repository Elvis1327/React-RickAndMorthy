import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
import { getRickData } from '../features/rickSlice';
import { getInputCharacter } from '../utils/data';
import { CharacterApi } from '../interfaces/rickRestApi';
import { CharactersCard } from './CharactersCard';



export const SearchRick = () => {

    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(getRickData())
    },[]);

    const { rickApiData } = useSelector((state: any) => state.rickApi);

    const [ inputData, setInputData ] = useState('');

    const data = getInputCharacter(inputData, rickApiData);

    return(
        <div className="search-rick-main-container">
            <div className="search-rick-container-input">
                <input 
                    type="text" 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputData(e.target.value)}
                    className='search-rick-input'
                    placeholder='Find Your Favorite Character'
                    value={inputData}
                    />
            </div>
            <div className="search-rick-container-cards">
                {data.length === 0 ?
                    <div className="search-rick-no-data">
                        <span>There are not Characters with this name</span>
                    </div>
                    :
                    data.map((character:CharacterApi) => (
                        <CharactersCard key={character.id} {...character} />
                    ))
                }
            </div>
        </div>
    );
};