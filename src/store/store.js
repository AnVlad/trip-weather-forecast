import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import currentCitySlice from '../Slicers/currentCitySlice';
import tripListSlice from '../Slicers/tripListSlice';
import searchSlice from '../Slicers/searchSlice';
import sortSlice from '../Slicers/sortSlice';
import booleanState from '../Slicers/booleanStateSlice';

const persistConfig = {
  key: 'root',
  storage,
  expire: 86400000, // to clear storage after 24h to get more actual weather data
};

const rootReducer = combineReducers({
  currentCity: currentCitySlice,
  tripList: tripListSlice,
  booleanState: booleanState,
  searchByName: searchSlice,
  sort: sortSlice,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
