import { configureStore } from '@reduxjs/toolkit';
import  rickSlide  from '../features/rickSlice';

export const store= configureStore({
    reducer: {
        rickApi: rickSlide
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



