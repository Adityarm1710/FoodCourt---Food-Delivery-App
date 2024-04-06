import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name:"Slider",
  initialState:{
    sliderList: null,
    sliderTitle: null,
  },
  reducers:{
    setsliderList: (state,action)=>{
       state.sliderList = action.payload;
    },
    setsliderTitle: (state,action)=>{
      state.sliderTitle = action.payload;
   },
  },
});

export const {setsliderList, setsliderTitle} = sliderSlice.actions;
export default sliderSlice.reducer;