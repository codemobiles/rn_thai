/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {User} from '../../types/user.type';
import {RootState} from '../store';
import AsyncStorage from '@react-native-community/async-storage';
import {kACCOUNT, kAUTHEN_SUCCESS, kYES} from '../../Constants';

type authState = {
  count: number;
  errorMsg?: string | null;
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
  const regUser = await AsyncStorage.getItem(kACCOUNT);

  if (!regUser) {
    throw new Error('Invalid Account - Never registered');
  }

  const regUserObj = JSON.parse(regUser) as User;
  if (
    regUserObj.username !== user.username ||
    regUserObj.password !== user.password
  ) {
    throw new Error('Invalid Username or Password');
  }

  await AsyncStorage.setItem(kAUTHEN_SUCCESS, kYES);
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
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.errorMsg = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.errorMsg = action.error.message;
    });
  },
});

export const {add, reset} = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
