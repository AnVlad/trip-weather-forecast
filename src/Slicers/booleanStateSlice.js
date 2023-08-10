import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  themeMode: false, // for the future theme mode
  showSignInModal: false,
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

    showSignInModal: (state) => {
      state.showSignInModal = !state.showSignInModal;
    },
  },
});

export const { showModal, changeThemeMode, showSignInModal } =
  booleanState.actions;
export default booleanState.reducer;
