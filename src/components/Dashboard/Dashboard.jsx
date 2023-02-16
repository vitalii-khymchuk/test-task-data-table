import { Container } from "./Dashboard.styled";
import PropTypes from "prop-types";

const Dashboard = ({ children }) => <Container>{children}</Container>;

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
