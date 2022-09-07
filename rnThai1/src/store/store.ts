import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import jsonReducer from './slices/json.slice';
import authReducer from './slices/auth.slice';
import cameraReducer from './slices/camera.slice';

const reducer = {
  jsonReducer,
  authReducer,
  cameraReducer,
};

export const store = configureStore({
  reducer,
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
