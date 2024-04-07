import { createSlice } from "@reduxjs/toolkit";

const topsliderSlice = createSlice({
  name: "topslider",
  initialState:{
    topsliderList: null,
    topsliderTitle: null,
  },
  reducers:{
    settopsliderList: (state,action)=>{
       state.topsliderList= action.payload;
    },
    settopsliderTitle: (state,action)=>{
      state.topsliderTitle= action.payload;
   },
  },
});

export const{settopsliderList,settopsliderTitle} = topsliderSlice.actions;
export default topsliderSlice.reducer;