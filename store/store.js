import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../slices/countriesSlice';
import regionReducer from '../slices/regionSlice';
import searchReducer from '../slices/searchSlice';
import themeReducer from '../slices/themeSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    region: regionReducer,
    search: searchReducer,
    theme: themeReducer,
  },
});
