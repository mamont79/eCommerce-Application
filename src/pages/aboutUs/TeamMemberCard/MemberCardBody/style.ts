import styled from 'styled-components';

export const StyledMemberCardBodyWrapper = styled.div`
  flex-grow: 1;

  width: 50%;

  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: unset;
  }
`;

export const StyledMemberCardBodySection = styled.section`
  max-width: 250px;
  width: 100%;
`;

export const StyledCarSectionHeading = styled.h4`
  margin-bottom: 0.5rem;
`;

export const StyledSectionParagraph = styled.p`
  margin: 0;
`;
