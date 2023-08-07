import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const tripListSlice = createSlice({
  name: 'tripList',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.push(action.payload);
    },
    setWeatherToCity: (state, action) => {
      return state.map((city) =>
        city.city === action.payload.city ? action.payload : city
      );
    },
    setCurrentWeather: (state, action) => {
      return state.map((city) =>
        city.city === action.payload.city ? action.payload : city
      );
    },
  },
});

export const { addCity, setWeatherToCity, setCurrentWeather } =
  tripListSlice.actions;
export default tripListSlice.reducer;
