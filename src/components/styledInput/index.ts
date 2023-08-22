import { Field } from 'formik';
import styled from 'styled-components';
import passwordInvisible from '../../assets/password-invisible.svg';
import passwordVisible from '../../assets/password-visible.svg';

const passwordInvisibleUrl = `url("${passwordInvisible}")`;
const passwordVisibleUrl = `url("${passwordVisible}")`;

const StyledFormikInput = styled(Field)`
  background: none;
  color: #cf844e;
  font-family: Arial;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid #c4c4c4;
  border-radius: 7px;
  width: -webkit-fill-available;
  outline: 0;
  outline-offset: 0;

  &::placeholder {
    color: #cf844e;
  }
`;

const StyledFormPasswordInputWrapper = styled.div`
  position: relative;
  margin: 0;
`;

const StyledFormPasswordInputIcon = styled.div<{ $visible?: boolean }>`
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-image: ${({ $visible }) =>
    $visible ? passwordInvisibleUrl : passwordVisibleUrl};
  background-repeat: no-repeat;
  background-position: center;
`;

export {
  StyledFormikInput,
  StyledFormPasswordInputWrapper,
  StyledFormPasswordInputIcon,
};
