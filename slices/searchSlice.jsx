import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCountryName: (state, { payload }) => {
      state.country = payload.country;
    },
  },
});

export const { setCountryName } = searchSlice.actions;

export const getCountryName = (state) => state.search;

export default searchSlice.reducer;
