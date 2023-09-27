import { Form } from 'formik';
import styled from 'styled-components';
import { StyledBtn } from '../../../components/styledBtn';

export const StyledOrderForm = styled(Form)`
  box-sizing: border-box;
  min-width: 350px;
  background-color: #fff4ea;
  padding: 15px;
  height: fit-content;
`;

export const StyledOrderTitle = styled.h2`
  font-size: 30px;
  margin: 0;
`;

export const StyledOrderInfo = styled.div`
  margin: 10px;
`;

export const StyledOrderInfoPoint = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledOrderPromocodeWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledResultLine = styled.div`
  border-bottom: 1px solid #9a501b;
  width: 100%;
  margin-top: 15px;
`;

export const StyledPromocodeInput = styled.input`
  background: none;
  color: #cf844e;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  width: -webkit-fill-available;
  outline: 0;
  outline-offset: 0;

  &::placeholder {
    color: #cf844e;
  }

  border-radius: 7px 0 0 7px;
`;

export const StyledOrderBtn = styled(StyledBtn)`
  width: 100%;
  margin-top: 20px;
`;

export const StyledOrderText = styled.p`
  color: #9a501bbf;
  margin: 2px 0;
`;

export const StyledOrderResultText = styled.h3`
  color: #9a501bbf;
  margin: 2px 0;
`;
