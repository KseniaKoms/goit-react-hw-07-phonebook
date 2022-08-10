import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = [...state.items.filter(item => item.id !== action.payload)];
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const selectContact = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
