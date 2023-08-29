import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomCharacters } from '../utils/data';
 
interface  rickApi {
    rickApiData: any[]
};
const initialState: rickApi = {
    rickApiData: []
}

// Getting the data from the RestApi
export const getRickData = createAsyncThunk(
    'RickApi/GetAllUsers',
    async () => {
        const rickData = await getRandomCharacters();
        return rickData;
    }
)

const rickSlide = createSlice({
    name: 'rickApi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRickData.fulfilled, ( state, action ) => {
            state.rickApiData = action.payload;
        });
    }
});

export default rickSlide.reducer;


