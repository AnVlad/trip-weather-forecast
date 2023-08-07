import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTrip: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTrip: (state, action) => {
      return { ...state, searchTrip: action.payload };
    },
  },
});

export const { setSearchTrip } = searchSlice.actions;
export default searchSlice.reducer;
