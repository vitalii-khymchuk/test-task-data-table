import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  availableColumns: { title: 'Available', items: [] },
  selectedColumns: {
    title: 'Picked',
    items: [
      { key: 'name', id: 'name' },
      { key: 'email', id: 'email' },
      { key: 'phone', id: 'phone' },
      { key: 'country', id: 'country' },
    ],
  },
  data: [],
  isLoading: false,
  error: null,
  filterAvailable: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    initTableColumns: {
      reducer: (state, { payload }) => {
        state.selectedColumns.items = payload.splice(0, 4);
        state.availableColumns.items = payload;
      },
    },
    setTableColumns: {
      reducer: (state, { payload }) => {
        state.availableColumns = payload.available;
        state.selectedColumns = payload.picked;
      },
    },
    setFilter: {
      reducer: (state, { payload }) => {
        state.filterAvailable = payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { initTableColumns, setTableColumns, setFilter } =
  contactsSlice.actions;
export { contactsSlice };
