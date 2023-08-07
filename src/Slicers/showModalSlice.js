import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
};

export const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    show: (state) => {
      state.show = !state.show;
    },
  },
});

export const { show } = showModalSlice.actions;
export default showModalSlice.reducer;
