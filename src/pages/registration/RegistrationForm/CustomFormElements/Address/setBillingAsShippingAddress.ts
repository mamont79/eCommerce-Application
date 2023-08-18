/* eslint-disable no-param-reassign */
import { BillingAddressFields, ShippingAddressFields } from '../../formFields';

export const setBillingAsShippingAddress = (
  values: ShippingAddressFields & BillingAddressFields
) => {
  values.billingCountry = values.shippingCountry;
  values.billingPostalCode = values.shippingPostalCode;
  values.billingCity = values.shippingCity;
  values.billingStreet = values.shippingStreet;
};
