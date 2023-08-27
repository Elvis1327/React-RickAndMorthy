import axios from "axios";

const Pages = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/character?page=2",
    'https://rickandmortyapi.com/api/character?page=3',
    'https://rickandmortyapi.com/api/character?page=4',
    "https://rickandmortyapi.com/api/character?page=5"
];

const Users = Math.floor( Math.random() * Pages.length );

export const getRandomUsers = async ()  => {
    const data = await axios.get(`${Users}`);
    return data;
};


