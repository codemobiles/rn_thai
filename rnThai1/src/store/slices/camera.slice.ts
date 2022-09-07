/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import {RootState} from '../store';
import ImagePicker from 'react-native-image-crop-picker';

export type cameraState = {
  image: any;
};

const defaultState: cameraState = {
  image: null,
};
export const handleCamera = createAsyncThunk(
  'camera/handleCamera',
  async (cropIt: boolean) => {
    let _image = await ImagePicker.openCamera({
      cropping: cropIt,
      width: 500, // width after cropped
      height: 500, // height after cropped
      includeExif: true,
    });
    return _image;
    // setImage({uri: _image.path, width: _image.width, height: _image.height});
  },
);
export const handleGallery = createAsyncThunk(
  'camera/handleGallery',
  async (cropIt: boolean) => {
    let _image = await ImagePicker.openPicker({
      // width: 300, // width after cropped
      // height: 300, // height after cropped
      cropping: cropIt,
      compressImageMaxWidth: 640, // max width compress if not croppred
      compressImageMaxHeight: 480, // max height compress if not croppred
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    });

    return _image;
  },
);

const cameraSlice = createSlice({
  name: 'camera',
  initialState: defaultState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleCamera.fulfilled, (state, action) => {
      const _image = action.payload;

      state.image = {
        uri: _image.path,
        width: _image.width,
        height: _image.height,
      };
    });

    builder.addCase(handleGallery.fulfilled, (state, action) => {
      const _image = action.payload;

      state.image = {
        uri: _image.path,
        width: _image.width,
        height: _image.height,
      };
    });
  },
});

export default cameraSlice.reducer;
