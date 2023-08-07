import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    setCity: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setCity } = currentCitySlice.actions;

export default currentCitySlice.reducer;
