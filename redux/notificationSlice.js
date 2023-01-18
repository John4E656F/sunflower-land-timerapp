import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ExponentPushToken: null,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setPushToken: (state, action) => {
      state.ExponentPushToken = action.payload;
    },
  },
});

export const { setPushToken } = notificationSlice.actions;
export default notificationSlice.reducer;
