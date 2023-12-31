import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {token: null, pseudo: null},
 };

 export const userSlice = createSlice({
  name: 'user',
   initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.pseudo = action.payload.pseudo;
    },
    logout: (state) => {
      state.value.isConnected = false;
      state.value.username = null;
    },
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;