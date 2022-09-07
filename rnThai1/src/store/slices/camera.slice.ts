/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export type cameraState = {
  image: any;
};

const defaultState: cameraState = {
  image: null,
};
export const handleCamera = createAsyncThunk('camera/handleCamera', () => {});
export const handleGallery = createAsyncThunk('camera/handleGallery', () => {});

const cameraSlice = createSlice({
  name: 'camera',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {},
});

export default cameraSlice.reducer;
