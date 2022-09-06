/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import YoutubeResponse, {Youtube} from '../../types/youtube.type';
import axios from 'axios';

type jsonState = {
  dataArray: Youtube[];
};

const defaultState: jsonState = {
  dataArray: [],
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
    });
    builder.addCase(loadData.rejected, (state, action) => {
      state.dataArray = [];
    });
  },
});

export default jsonSlice.reducer;
