import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../utils/endPoints';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('fetch/countries', async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();

  return data.map((item) => ({
    name: item.name,
    population: item.population,
    region: item.region,
    capital: item.capital ? item.capital[0] : null,
    flag: item.flags ? item.flags.png : null,
  }));
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    rehydrate: (state, { payload }) => {
      state.data = payload.data;
      state.isLoading = payload.isLoading;
      state.error = payload.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Bad Request';
      });
  },
});

export const { rehydrate } = countriesSlice.actions;

export const getCountries = (state) => state.countries.data;

export default countriesSlice.reducer;
