import styled from "@emotion/styled";

const Container = styled.div`
  background-color: white;
  margin-top: auto;
  margin-bottom: auto;
  padding: 15px;
  border-radius: 8px;
  width: 100%;
  max-width: 1280px;
  min-height: 200px;
  @media screen and (min-width: 480px) and (max-width: 1023px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
  } ;
`;

export { Container };
