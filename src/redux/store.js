import { configureStore, createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
