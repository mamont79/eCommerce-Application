import { Formik } from 'formik';
import {
  StyledOrderBtn,
  StyledOrderForm,
  StyledOrderInfo,
  StyledOrderInfoPoint,
  StyledOrderPromocodeWrapper,
  StyledOrderResultText,
  StyledOrderText,
  StyledOrderTitle,
  StyledPromocodeInput,
  StyledResultLine,
} from './style';
import StyledErrorMessage from '../../../components/errorMessage/styledErrorMessage';
import { StyledBtn } from '../../../components/styledBtn';

export default function Order() {
  return (
    <Formik
      initialValues={{
        promocode: '',
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { promocode } = values;
      }}
    >
      <StyledOrderForm>
        <StyledOrderTitle>Order price</StyledOrderTitle>
        <StyledOrderInfo>
          <StyledOrderInfoPoint>
            <StyledOrderText>Goods</StyledOrderText>
            <StyledOrderText>2</StyledOrderText>
          </StyledOrderInfoPoint>

          <StyledOrderInfoPoint>
            <StyledOrderText>Discount</StyledOrderText>
            <StyledOrderText>30</StyledOrderText>
          </StyledOrderInfoPoint>
        </StyledOrderInfo>

        <StyledOrderPromocodeWrapper>
          <StyledPromocodeInput name="promocode" placeholder="promocode" />
          <StyledBtn $primary>Apply</StyledBtn>
        </StyledOrderPromocodeWrapper>

        <StyledErrorMessage>invalid promocode</StyledErrorMessage>
        <StyledResultLine />
        <StyledOrderInfoPoint>
          <StyledOrderResultText>Result</StyledOrderResultText>
          <StyledOrderResultText>35</StyledOrderResultText>
        </StyledOrderInfoPoint>
        <StyledOrderBtn $primary>Order</StyledOrderBtn>
      </StyledOrderForm>
    </Formik>
  );
}
