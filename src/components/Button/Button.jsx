import { StyledButton } from "./Button.styled";

const Button = ({ children, ...props }) => (
  <StyledButton type="primary" size="middle" {...props}>
    {children}
  </StyledButton>
);

export default Button;
