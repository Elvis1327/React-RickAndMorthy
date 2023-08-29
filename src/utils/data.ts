import axios from "axios";

// Capture 5 different pages from the RestAPI
const Pages = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/character?page=2",
    'https://rickandmortyapi.com/api/character?page=3',
    'https://rickandmortyapi.com/api/character?page=4',
    "https://rickandmortyapi.com/api/character?page=5"
];


// Get a Random page from the RestAPI
const Users = Math.floor( Math.random() * Pages.length );


// Function to export the Data
export const getRandomCharacters = async ()  => {
    const data = await axios.get(`${Users}`);
    return data;
};


