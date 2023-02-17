import Particle from './Particle';
import Dashboard from './Dashboard';
import DataTable from './Table';
import FilterModal from './FilterModal/FilterModal';
import Error from './Error';
import { Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectAllColumns,
  selectFetchedData,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { updColumnHeaders } from '../utils/updColumns';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectFetchedData);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const currentColumnsTitles = useSelector(selectAllColumns);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  //Inits column titles, if column titles wasnt changed after fetch data, they save own state after reloading
  useEffect(() => {
    updColumnHeaders(dispatch, data, currentColumnsTitles);
  }, [dispatch, data, currentColumnsTitles]);
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
