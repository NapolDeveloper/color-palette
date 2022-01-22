import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

//slices
import UserStateSlice from './User/UserStateSlice';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    userState: UserStateSlice
  },
  middleware
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
