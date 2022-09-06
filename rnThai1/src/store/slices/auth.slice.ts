/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {count: 0},
  reducers: {},
  extraReducers: builder => {},
});

export default authSlice.reducer;
