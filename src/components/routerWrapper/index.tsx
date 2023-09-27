import { Routes } from 'react-router-dom';
import styled from 'styled-components';

export const StyledRoutes = styled(Routes)`
  flex-grow: 1;
`;

export const StyledPageWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
