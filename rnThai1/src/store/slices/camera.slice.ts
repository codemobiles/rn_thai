/* eslint-disable @typescript-eslint/no-unused-vars */
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Alert, Platform} from 'react-native';
import {RootState, store} from '../store';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

export type cameraState = {
  image: any;
};

const defaultState: cameraState = {
  image: null,
};

export const handleUpload = createAsyncThunk(
  'camera/handleUpload',
  async () => {
    const image = store.getState().cameraReducer.image;
    const uriParts = image.uri.split('.');
    const fileType = uriParts[uriParts.length - 1];

    const data = new FormData();
    data.append('username', 'codemobiles'); // you can append anyone.
    data.append('password', '1234'); // you can append anyone.
    data.append('userfile', {
      uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
      type: `image/${fileType}`, // or photo.type
      name: 'testPhotoName.jpg',
    });

    let result = await axios.post('http://172.20.10.8:3000/uploads', data, {
      headers: {'Content-Type': 'multipart/form-data'},
    });
    console.log(JSON.stringify(result.data));
    Alert.alert(JSON.stringify(result.data));
  },
);

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

export const cameraSelector = (state: RootState) => state.cameraReducer;
export default cameraSlice.reducer;
