import { createSlice } from '@reduxjs/toolkit';

const initialState = 'byDefault';

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortType: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSortType } = sortSlice.actions;
export default sortSlice.reducer;
