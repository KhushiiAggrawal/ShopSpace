import { configureStore } from "@reduxjs/toolkit";

// adding all reducers from their slices
import authReducer from "../slices/authSlice";
import categoryReducer from "../slices/categorySlice";
import productReducer from "../slices/productSlice";
import wishlistReducer from "../slices/wishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    wishlist:wishlistReducer,
  },
});
