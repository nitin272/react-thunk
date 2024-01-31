import { createAsyncThunk, createReducer, createAction } from '@reduxjs/toolkit';

import axios from 'axios';


const initialState = {

    users: []
};



export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    return response.data;
});


export const addInitialData = createAction('users/addInitialData');


const userReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(fetchUsers.fulfilled, (state, action) => {

            state.users = action.payload;
        })
        .addCase(addInitialData, (state, action) => {

            state.users = [...action.payload];

        });
});


export const selectUsers = (state) => state.userReducer.users;


export default userReducer;
