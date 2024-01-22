// showsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const showsSlice = createSlice({
  name: 'shows',
  initialState: [],
  reducers: {
    setShows: (state, action) => {
      return action.payload;
    },
  },
});

export const { setShows } = showsSlice.actions;

export default showsSlice.reducer;