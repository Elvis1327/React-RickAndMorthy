import axios from "axios";
import { RootObject } from "../interfaces/rickRestApi";

// Capture 5 different pages from the RestAPI
const pages = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/character?page=2",
    'https://rickandmortyapi.com/api/character?page=3',
    'https://rickandmortyapi.com/api/character?page=4',
    "https://rickandmortyapi.com/api/character?page=5"
];


// Get a Random page from the RestAPI
const characters = Math.floor( Math.random() * pages.length );


// Function to export the Data
export const getRandomCharacters = async ()  => {
    const { data } = await axios.get(`${pages[characters]}`);
    return data.results;
};

// Get data by Input text
export const getInputCharacter = (str:any, characters:any[]) => {   
    if (str.length === 0){  
        return characters;
    }else{
        return characters.filter((e) => e.name.toLowerCase().includes(str));
    };
};


