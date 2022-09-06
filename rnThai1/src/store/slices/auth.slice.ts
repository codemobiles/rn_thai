/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type authState = {
  count: number;
};

const defaultState: authState = {
  count: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultState,
  reducers: {
    add: state => {
      state.count = state.count + 1;
    },
    reset: (state: authState, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {add, reset} = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
