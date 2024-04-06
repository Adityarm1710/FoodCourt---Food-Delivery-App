import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sliderReducer from "./sliderSlice";


const appStore = configureStore({
    reducer:{
      cart: cartReducer,
      slider: sliderReducer,
     
    }
});

export default appStore;