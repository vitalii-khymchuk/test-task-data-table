const selectFilterAvailable = (state) => state.filterAvailable;
const selectAvailableColumns = (state) => state.availableColumns;
const selectSelectedColumns = (state) => state.selectedColumns;
const selectIsInit = (state) => state.isInit;

export {
  selectSelectedColumns,
  selectAvailableColumns,
  selectFilterAvailable,
  selectIsInit,
};
