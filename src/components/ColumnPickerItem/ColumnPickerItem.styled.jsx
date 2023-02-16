import styled from "@emotion/styled";

const TaskInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  min-height: 60px;
  border-radius: 5px;
  width: 90%;
  background: white;
  margin-top: 15px;
`;

const RemoveBtn = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export { TaskInformation, RemoveBtn };
