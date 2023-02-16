import { StyledButton } from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ children, ...props }) => (
  <StyledButton type="primary" size="middle" {...props}>
    {children}
  </StyledButton>
);

Button.protoTypes = {
  children: PropTypes.node,
  props: PropTypes.shape,
};

export default Button;
