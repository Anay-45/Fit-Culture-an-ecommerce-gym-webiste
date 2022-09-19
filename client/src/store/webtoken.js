import { createSlice } from "@reduxjs/toolkit";


const webtoken = createSlice({
  name: "webtoken",
  initialState: {
    token: localStorage.getItem("token"),
    isloggedIn: !!localStorage.getItem("token"),
  },
  reducers: {
    logout(state) {
      state.token = "";
      state.isloggedIn = false;
      localStorage.removeItem("token");
    },
    login(state, action) {
      state.token = action.payload.token;
      state.isloggedIn = true;
      localStorage.setItem("token", state.token);
      
    },
  },
});

export const webtokenactions = webtoken.actions;

export default webtoken;