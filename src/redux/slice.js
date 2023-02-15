import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availableColumns: [],
  selectedColumns: [],
  filterAvailable: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    initTableColumns: {
      reducer: (state, { payload }) => {
        state.selectedColumns = payload.splice(0, 4);
        state.availableColumns = payload;
      },
    },
    selectColumn: {
      reducer: (state, { payload }) => {
        state.selectedColumns.push(payload);
        state.availableColumns = state.availableColumns.filter(
          ({ id }) => id !== payload.id
        );
      },
    },
    discardColumn: {
      reducer: (state, { payload }) => {
        state.availableColumns.push(payload);
        state.selectedColumns = state.selectedColumns.filter(
          ({ id }) => id !== payload.id
        );
      },
    },
    setFilter: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
  },
});

export const { initTableColumns, selectColumn, discardColumn, setFilter } =
  contactsSlice.actions;
export { contactsSlice };
