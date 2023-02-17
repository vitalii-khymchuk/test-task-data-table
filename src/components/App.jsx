import Particle from "./Particle";
import Dashboard from "./Dashboard";
import DataTable from "./Table";
import FilterModal from "./FilterModal/FilterModal";
import Error from "./Error";
import { Spin } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initTableColumns } from "../redux/slice";
import { useSelector } from "react-redux";
import {
  selectAllColumns,
  selectFetchedData,
  selectError,
  selectIsLoading,
} from "../redux/selectors";
import { fetchContacts } from "../redux/operations";
import { isEqual } from "lodash";
import { nanoid } from "nanoid";

const shouldUpdColumns = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);
  return !isEqual(setA, setB);
};

const App = () => {
  const data = useSelector(selectFetchedData);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const currentColumnsTitles = useSelector(selectAllColumns);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  //Inits column titles, if column titles wasnt changed after fetch data, they save own state after reloading
  useEffect(() => {
    if (!data.length) return;
    const newColumnTitles = Object.keys(data[0]).map((key) => ({
      key,
      id: nanoid(),
    }));
    if (!shouldUpdColumns(newColumnTitles, currentColumnsTitles)) return;
    dispatch(initTableColumns(newColumnTitles));
  }, [dispatch, data]);
  return (
    <Particle>
      <Dashboard>
        {!error && (
          <>
            <Spin tip="Loading..." size="large" spinning={isLoading}>
              <FilterModal />
              <DataTable data={data} />
            </Spin>
          </>
        )}
        {error && <Error error={error} />}
      </Dashboard>
    </Particle>
  );
};

export default App;
