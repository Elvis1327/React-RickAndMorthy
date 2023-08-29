import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomCharacters } from '../utils/data';
 
interface  rickApi {
    results: any[]
};

const initialState: rickApi = {
    results: []
}

// Getting the data from the RestApi
export const getRickData = createAsyncThunk(
    'rickApi/getRickData',
    async () => {
        const response = await getRandomCharacters();
        console.log(response)
        return response;
    }
)

const rickSlide = createSlice({
    name: 'rickApi',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRickData.fulfilled, ( state, action ) => {
            state.results.push(action.payload);
        });
    }
});

export default rickSlide.reducer;


