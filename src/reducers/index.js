import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ShippingAddressFormReducer from './ShippingAddressFormReducer';

export default combineReducers({
	auth: AuthReducer,
	shippingAddressForm: ShippingAddressFormReducer
});
