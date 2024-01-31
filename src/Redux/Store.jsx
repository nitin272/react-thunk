import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducer';


export const myStore = configureStore({

    reducer: {

        userReducer, 
        
    },

});
