import Particle from "./Particle";
import Dashboard from "./Dashboard";
import DataTable from "./Table";

import FilterModal from "./FilterModal/FilterModal";

import data from "../data/data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initTableColumns } from "../redux/slice";

const App = () => {
  //Inits column titles
  const dispatch = useDispatch();
  useEffect(() => {
    const titles = Object.keys(data[0]).map((key) => ({ key, id: key }));
    dispatch(initTableColumns(titles));
  }, [dispatch]);
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
