import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin: auto 60px auto auto;
`;

const StyledGreeting = styled.p`
  color: #ffa555;
  margin: auto auto auto 60px;
  font-weight: 700;
`;
export { StyledNavigation, StyledGreeting };
