import styled from "@emotion/styled";

const ParticleContainer = styled.div`
  background: #1488cc;
  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #2B32B2, #1488CC); */
  background: -webkit-linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #2B32B2, #1488CC); */
  background: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  vertical-align: bottom;
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export { ParticleContainer };
