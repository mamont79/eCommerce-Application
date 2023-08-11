import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, minmax(245px, 630px));
  gap: 50px;

  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 630px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
