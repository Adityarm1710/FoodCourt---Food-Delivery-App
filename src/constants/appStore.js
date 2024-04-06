import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sliderReducer from "./sliderSlice";
import topsliderReducer from "./topsliderSlice";

const appStore = configureStore({
    reducer:{
      cart: cartReducer,
      slider: sliderReducer,
      topslider: topsliderReducer,
    }
});

export default appStore;