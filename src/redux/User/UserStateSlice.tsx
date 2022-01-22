import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const name = 'userState';

type stateType = {
  user: { name: string; isLogged: boolean };
};

type actionType = {
  name: string;
  isLogged: boolean;
};

const initialState: stateType = {
  user: { name: 'test', isLogged: false }
};

export const slice = createSlice({
  name,
  initialState,
  reducers: {
    setLoginTrue: (state, action: PayloadAction<actionType>) => {
      state.user.isLogged = true;
      state.user.name = action.payload.name;
      console.log('setLoginTrue 실행');
    },
    setLoginFalse: (state, action: PayloadAction<actionType>) => {
      state.user.isLogged = false;
      state.user.name = '';
      console.log('setLoginFalse 실행');
    }
  },
  extraReducers: {}
});

export const { setLoginTrue, setLoginFalse } = slice.actions;
export const selectUserName = (state: stateType) => state.user.name;
export default slice.reducer;
