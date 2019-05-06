import { ADD_REVIEW_FORM_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	rating: null,
	review: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_REVIEW_FORM_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		default:
			return state;
	}
};
