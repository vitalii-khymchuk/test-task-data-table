import { createSelector } from "@reduxjs/toolkit";

const selectFilterAvailable = (state) => state.filterAvailable;
const selectAvailableColumns = (state) => state.availableColumns;
const selectSelectedColumns = (state) => state.selectedColumns;

const selectFilteredAvailable = createSelector(
  [selectFilterAvailable, selectSelectedColumns],
  (filter, columns) => {
    return columns.filter(({ key }) =>
      key.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

export { selectSelectedColumns, selectFilteredAvailable };
