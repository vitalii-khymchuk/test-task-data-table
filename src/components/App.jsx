import Particle from "./Particle";
import Dashboard from "./Dashboard";
import DataTable from "./Table";
import FilterModal from "./FilterModal/FilterModal";

import data from "../data/data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initTableColumns } from "../redux/slice";
import { useSelector } from "react-redux";
import { selectIsInit } from "../redux/selectors";

const App = () => {
  //Inits column titles
  const isInit = useSelector(selectIsInit);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInit) return;
    const columnTitles = Object.keys(data[0]).map((key) => ({ key, id: key }));
    dispatch(initTableColumns(columnTitles));
  }, [dispatch, isInit]);
  return (
    <Particle>
      <Dashboard>
        <FilterModal />
        <DataTable data={data} />
      </Dashboard>
    </Particle>
  );
};

export default App;
