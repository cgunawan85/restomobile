import { SHIPPING_ADDRESS_FORM_UPDATE } from './types';

export const shippingAddressFormUpdate = ({ prop, value }) => {
	return {
		type: SHIPPING_ADDRESS_FORM_UPDATE,
		payload: { prop, value }
	};
};
