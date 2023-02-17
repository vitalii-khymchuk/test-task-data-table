import { createSelector } from "@reduxjs/toolkit";

const selectFilterAvailable = (state) => state.filterAvailable;
const selectAvailableColumns = (state) => state.availableColumns;
const selectSelectedColumns = (state) => state.selectedColumns;
const selectFetchedData = (state) => state.data;
const selectError = (state) => state.error;
const selectIsLoading = (state) => state.isLoading;
const selectAllColumns = createSelector(
  [selectAvailableColumns, selectSelectedColumns],
  (available, selected) => {
    return [...available.items, ...selected.items];
  }
);

export {
  selectSelectedColumns,
  selectAvailableColumns,
  selectFilterAvailable,
  selectAllColumns,
  selectFetchedData,
  selectError,
  selectIsLoading,
};
