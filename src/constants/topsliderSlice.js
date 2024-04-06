import { createSlice } from "@reduxjs/toolkit";
import { init } from "create-react-app/createReactApp";

const topsliderSlice= createSlice({
  name: "topslider",
  initialState:{
    topsliderList: null,
    topsliderTitle: null,
  },
  reducers:{
    settopsliderList: (store,action)=>{
       store.topsliderList = action.payload;
    },
    settopsliderTitle: (store,action)=>{
      store.topsliderTitle = action.payload;
   },
  }
});

export const {settopsliderList, settopsliderTitle} = topsliderSlice.actions;
export default topsliderSlice.reducer;