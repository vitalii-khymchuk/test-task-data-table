import { Button } from "antd";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
  background-color: violet;
  color: white;
  &:hover,
  &:focus {
    background-color: #f3a5f3 !important;
  }
`;

export { StyledButton };
