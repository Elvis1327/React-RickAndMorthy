import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRickData } from '../features/rickSlice';


export const Users = () => {

    const dispatch = useDispatch<any>();
    // const { results } = useSelector<any>((store) => store.rickApi)


    useEffect(() => {
        dispatch(getRickData());
    }, [])


    return(
        <h1>Home</h1>
    )
}