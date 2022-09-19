import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "uislice",
  initialState: {
    popup: false,
    loading: false,
    content: null,
    sucess: false,
    error: false,
  },
  reducers: {
    setLoading(state, action){
      state.popup = true;
      state.loading = true;
      state.content = action.payload.content;
    },
    setsuccess(state, action){
      state.loading = false;
      state.content = action.payload.content;
      state.sucess = true;
    },
    seterror(state, action){
      state.loading = false;
      state.content = action.payload.content;
      state.error = true;
    },
    initit(state){
      state.popup = false;
      state.loading = false;
      state.content = null;
      state.sucess = false;
      state.error = false;
    },
  },
});

export const uiactions = uislice.actions;
export default uislice;
