/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {User} from '../../types/user.type';
import {RootState} from '../store';
import AsyncStorage from '@react-native-community/async-storage';
import {kACCOUNT} from '../../Constants';

type authState = {
  count: number;
};

const defaultState: authState = {
  count: 0,
};

export const register = createAsyncThunk(
  'auth/register',
  async (user: User) => {
    await AsyncStorage.setItem(kACCOUNT, JSON.stringify(user));
  },
);

export const login = createAsyncThunk('auth/login', async (user: User) => {
  Alert.alert(JSON.stringify(user));
});

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
