import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 165px);
  color: #ffa555;
  background: #ffffff;
`;

export const StyledErrorMessage = styled.h1`
  text-align: center;
`;

export const StyledErrorSolution = styled.h2`
  text-align: center;
`;

export const StyledIconWrapper = styled.div`
  width: 350px;
  height: 277px;
  margin: 10px auto;
`;
