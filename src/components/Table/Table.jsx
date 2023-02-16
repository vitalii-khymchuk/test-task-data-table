import { Table } from "antd";
import { selectSelectedColumns } from "../../redux/selectors";
import { useSelector } from "react-redux";

const makeColumns = (columnTitles) => {
  return columnTitles.map(({ key }) => ({
    title: key.toUpperCase(),
    dataIndex: key,
    key,
  }));
};

const DataTable = ({ data }) => {
  const columnTitles = useSelector(selectSelectedColumns).items;
  if (!columnTitles.length && !data.length) return <h1>No data for table</h1>;
  const columns = makeColumns(columnTitles);
  return <Table dataSource={data} columns={columns} />;
};

export default DataTable;
