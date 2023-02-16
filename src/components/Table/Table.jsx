import { StyledTable } from "./Table.styled";
import { selectSelectedColumns } from "../../redux/selectors";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const makeColumns = (columnTitles) => {
  return columnTitles.map(({ key }) => ({
    title: key.toUpperCase(),
    dataIndex: key,
    key,
  }));
};

const DataTable = ({ data }) => {
  const columnTitles = useSelector(selectSelectedColumns).items;
  const columns = makeColumns(columnTitles);
  return <StyledTable dataSource={data} columns={columns} />;
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
};
export default DataTable;
