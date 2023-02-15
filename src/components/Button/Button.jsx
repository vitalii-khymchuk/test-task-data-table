import { StyledButton } from "./Button.styled";

const Button = ({ children }) => (
  <StyledButton type="primary" size="middle">
    {children}
  </StyledButton>
);

export default Button;
