import { configureStore } from '@reduxjs/toolkit';
import currentCitySlice from '../Slicers/currentCitySlice';
import tripListSlice from '../Slicers/tripListSlice';
import showModalSlice from '../Slicers/showModalSlice';
import searchSlice from '../Slicers/searchSlice';

export const store = configureStore({
  reducer: {
    currentCity: currentCitySlice,
    tripList: tripListSlice,
    showModal: showModalSlice,
    searchByName: searchSlice,
  },
});
