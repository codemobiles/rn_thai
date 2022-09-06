/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const authSlice = createSlice({
  name: 'auth',
  initialState: {count: 0},
  reducers: {
    add: state => {
      state.count = state.count + 1;
    },
  },
  extraReducers: builder => {},
});

export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
