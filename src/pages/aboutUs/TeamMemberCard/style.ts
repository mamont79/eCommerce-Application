import styled from 'styled-components';

export const StyledMemberCardWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  border: 4px solid #c1c1c1;
  border-style: outset;
  border-radius: 5px;

  box-shadow: 4px 4px 4px;
  padding: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StlyedGitHubLinkWrapper = styled.div`
  width: 100%;

  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
