import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  themeMode: false, // for the future theme mode
};

export const booleanState = createSlice({
  name: 'booleanState',
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = !state.showModal;
    },

    changeThemeMode: (state) => {
      state.themeMode = !state.themeMode;
    },
  },
});

export const { showModal, changeThemeMode } = booleanState.actions;
export default booleanState.reducer;
