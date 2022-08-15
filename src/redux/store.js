import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: reducer,
  },
});
