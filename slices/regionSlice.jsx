import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
};

const regionSlice = createSlice({
  name: 'region',
  initialState,
  reducers: {
    toggleSelectBox: (state) => {
      state.isOpened = !state.isOpened;
    },
  },
});

export const { toggleSelectBox, setRegion } = regionSlice.actions;

export const selectBoxIsOpened = (state) => state.region.isOpened;
export const getRegion = (state) => state.region.selectedRegion;

export default regionSlice.reducer;
