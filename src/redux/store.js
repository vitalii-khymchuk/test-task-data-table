import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./slice";

const store = configureStore({
  reducer: contactsSlice.reducer,
});

export { store };
