import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  availableColumns: { title: "Available", items: [] },
  selectedColumns: { title: "Picked", items: [] },
  filterAvailable: "",
  isInit: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    initTableColumns: {
      reducer: (state, { payload }) => {
        state.selectedColumns.items = payload.splice(0, 4);
        state.availableColumns.items = payload;
        state.isInit = true;
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
});

export const { initTableColumns, setTableColumns, setFilter } =
  contactsSlice.actions;
export { contactsSlice };
