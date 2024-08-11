import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./useReducer"; // Correct import path

export default configureStore({
  reducer: {
    formData: formReducer, // Correct reducer name
  },
});
