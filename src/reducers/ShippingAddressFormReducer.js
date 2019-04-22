import { SHIPPING_ADDRESS_FORM_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	title: '',
	address: '',
	province: '',
	city: '',
	postal_code: '',
	pic: '',
	pic_phone_number: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHIPPING_ADDRESS_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default: 
			return state;
	}
};
