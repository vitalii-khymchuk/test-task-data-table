import Particle from "./Particle";
import Dashboard from "./Dashboard";
import DataTable from "./Table";
import Button from "./Button";
import FilterModal from "./FilterModal/FilterModal";

import data from "../data/data.json";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initTableColumns } from "../redux/slice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const titles = Object.keys(data[0]).map((key) => ({ key }));
    dispatch(initTableColumns(titles));
  }, [dispatch]);
  return (
    <Particle>
      <Dashboard>
        <Button>Select Columns</Button>
        <DataTable data={data} />
        <FilterModal />
      </Dashboard>
    </Particle>
  );
};

export default App;
