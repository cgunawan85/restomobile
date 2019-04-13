import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_USER,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true };
		case LOGIN_USER_SUCCESS:
			return { ...INITIAL_STATE, user: action.payload };
		case LOGIN_USER_FAIL:
			return { ...state, password: '', loading: false };
		case LOGOUT_SUCCESS:
			return { ...INITIAL_STATE };
		case REGISTER_USER:
			return { ...state, loading: true };
		case REGISTER_USER_SUCCESS:
			return { ...INITIAL_STATE, user: action.payload };
		case REGISTER_USER_FAIL:
			return { ...state, email: '', password: '', loading: false };
		default:
			return state;
	}
};
