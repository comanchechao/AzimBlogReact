import { configureStore } from "@reduxjs/toolkit";
import { selectedFiltersReducer } from "./products/filterSelection";
import {
  colorReducer,
  sizeReducer,
  glassTypeReducer,
  lensTypeReducer,
  lensReducer,
  lensWidthReducer,
} from "./shop/orderDetail";
import { userReducer } from "./user/user.js";
import { cartReducers } from "./shop/shoppingCart";

export default configureStore({
  reducer: {
    size: sizeReducer,
    color: colorReducer,
    lensType: lensTypeReducer,
    glassType: glassTypeReducer,
    lensDetail: lensReducer,
    lensWidth: lensWidthReducer,
    user: userReducer,
    selectedFilters: selectedFiltersReducer,
    cart: cartReducers,
  },
});
