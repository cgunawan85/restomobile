import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ShippingAddressFormReducer from './ShippingAddressFormReducer';
import OrdersReducer from './OrdersReducer';

export default combineReducers({
	auth: AuthReducer,
	shippingAddressForm: ShippingAddressFormReducer,
	orders: OrdersReducer
});
