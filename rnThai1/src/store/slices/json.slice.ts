/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import YoutubeResponse, {Youtube} from '../../types/youtube.type';
import axios from 'axios';
import {RootState} from '../store';

type jsonState = {
  dataArray: Youtube[];
  isError: boolean;
};

const defaultState: jsonState = {
  dataArray: [],
  isError: false,
};

export const loadData = createAsyncThunk('json/loadData', async () => {
  const url =
    'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs';

  const result = await axios.get<YoutubeResponse>(url);

  return result.data.youtubes;
});

const jsonSlice = createSlice({
  name: 'json',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      state.dataArray = action.payload;
      state.isError = false;
    });
    builder.addCase(loadData.rejected, (state, action) => {
      state.dataArray = [];
      state.isError = true;
    });
  },
});

export const jsonSelector = (state: RootState) => state.jsonReducer;
export default jsonSlice.reducer;
