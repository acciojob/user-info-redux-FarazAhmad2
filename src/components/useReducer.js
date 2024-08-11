import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: '',
  email: '',
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.userName = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const { updateName, updateEmail } = formSlice.actions;
export default formSlice.reducer;
