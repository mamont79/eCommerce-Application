import { Form } from 'formik';
import styled from 'styled-components';
import { StyledFormikInput } from '../../../components/StyledInput';
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

export const StyledPromocodeInput = styled(StyledFormikInput)`
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
