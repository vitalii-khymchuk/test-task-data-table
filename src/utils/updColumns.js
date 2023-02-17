import { isEqual } from 'lodash';
import { nanoid } from 'nanoid';
import { initTableColumns } from '../redux/slice';

//Check if columns headers that we get same as it was before, if not we no need update it
const shouldUpdColumns = (a, b) => {
  const setA = new Set(a.map(({ key }) => key));
  const setB = new Set(b.map(({ key }) => key));
  return !isEqual(setA, setB);
};

const updColumnHeaders = (dispatch, data, currentColumnsTitles) => {
  if (!data.length) return;
  const newColumnTitles = Object.keys(data[0]).map(key => ({
    key,
    id: nanoid(),
  }));
  if (!shouldUpdColumns(newColumnTitles, currentColumnsTitles)) return;
  dispatch(initTableColumns(newColumnTitles));
};

export { updColumnHeaders };
