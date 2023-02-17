import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
`;

const List = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  width: 45%;
  border-radius: 5px;
  padding: 15px 15px;
`;

const ColumnStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 500px;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const ApplyBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export { Container, List, ColumnStyles, Title, ApplyBtnWrap };
