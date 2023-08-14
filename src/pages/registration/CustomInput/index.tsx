// import { useState } from 'react';
// import { StyledInput } from '../../../components/Checkobox/style';
// import handleInputChange from '../validation-checks/HandleInput';

// function CustomInput(validator: (value: string) => string | null) {
//   const [inputValue, setInputValue] = useState('');
//   const [inputTouched, setInputTouched] = useState(false);
//   // const [emailError, setEmailError] = useState('');

//   const handleInputFocus = () => {
//     if (!inputTouched) setInputTouched(true);
//   };

//   const errorMsg = validator(inputValue);

//   return (
//     <div>
//       <StyledInput
//         // $margin="20px 0 0 0"
//         type="text"
//         placeholder="e-mail"
//         name="email"
//         value={inputValue}
//         onFocus={() => handleInputFocus()}
//         onChange={(e) => emailHandler(e)}
//       />
//       {/* {inputTouched && emailError && (
//         <StyledErrorSpan>{emailError} </StyledErrorSpan>
//       )} */}
//     </div>
//   );
// }

// export default CustomInput;
