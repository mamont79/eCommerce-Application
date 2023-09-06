import { styled } from 'styled-components';

export const StyledBodyBlinder = styled.div`
  box-sizing: border-box;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  background-color: #00000070;
`;

export const StyledModalContentWrapper = styled.div`
  padding: 1rem 2rem;

  background-color: #ffffff;
  border-radius: 5px;
`;
