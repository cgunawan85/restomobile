import { Toast } from 'native-base';
import firebase from 'firebase/app';
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
} from './types';
import NavigationService from '../services/NavigationService';

require('firebase/auth');

function renderErrorMessage(errorMessage) {
	return Toast.show({
		text: errorMessage,
		duration: 3000,
		buttonText: 'Try again!'
	});
}

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
				NavigationService.navigate('Main');
			})
			.catch((error) => {
				renderErrorMessage(error.message);
				dispatch({ type: LOGIN_USER_FAIL });
		});
	};
};

export const registerUser = ({ email, password }) => {
	return (dispatch) => {
		dispatch({ type: REGISTER_USER }); // for loading spinner
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(user => { 
			dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
			NavigationService.navigate('Main');
		})
		.catch((error) => {
			renderErrorMessage(error.message);
			dispatch({ type: REGISTER_USER_FAIL });
		});
	};
};

export const signOut = () => {
	return (dispatch) => {
		firebase.auth().signOut().then(() => {
			dispatch({ type: LOGOUT_SUCCESS });
			NavigationService.navigate('AuthStack');
		});
	};
};
