/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {RootState} from '../store';

export type cameraState = {
  image: any;
};

const defaultState: cameraState = {
  image: null,
};
export const handleCamera = createAsyncThunk('camera/handleCamera', () => {
  Alert.alert('Camera');
});
export const handleGallery = createAsyncThunk('camera/handleGallery', () => {
  Alert.alert('Gallery');
});

const cameraSlice = createSlice({
  name: 'camera',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {},
});

export default cameraSlice.reducer;
