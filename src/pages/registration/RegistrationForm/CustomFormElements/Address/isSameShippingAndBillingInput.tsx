// import {
//   Mutator,
//   makeBillingSameAsShippingAddress,
// } from './makeBillingSameAsShipping';

// export function IsSameBillingAndShippingAddressInput({
//   isSame,
//   values,
//   setValues,
//   setBillingSameToShipping,
// }: Mutator & {
//   isSame: boolean;
//   setBillingSameToShipping: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   if (isSame) makeBillingSameAsShippingAddress({ values, setValues });

//   return (
//     <input
//       type="checkbox"
//       checked={isSame}
//       onChange={() => handleChange({ values, setValues })}
//     />
//   );
// }
