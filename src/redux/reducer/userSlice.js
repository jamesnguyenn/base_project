import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    usernames: '',
};

const userReducers = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userReducers.reducer;
