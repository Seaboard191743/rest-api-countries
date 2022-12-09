import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  suffix: '',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchThemeMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.isDarkMode ? (state.suffix = 'dark') : (state.suffix = '');
    },
  },
});

export const { switchThemeMode } = themeSlice.actions;

export const isDarkMode = (state) => state.theme;

export default themeSlice.reducer;
