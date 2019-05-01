import {
	SHIPPING_ADDRESS_FORM_UPDATE, 
	RESET_LOCATION, RESET_STATE, 
	UPDATE_LONGITUDE_LATITUDE,
	UPDATE_ADDRESS_QUERY,
	LOOKUP_COORDINATES,
	LOOKUP_COORDINATES_SUCCESS,
	LOOKUP_COORDINATES_FAILED
} from './types';

const axios = require('axios');

export const shippingAddressFormUpdate = ({ prop, value }) => {
	return {
		type: SHIPPING_ADDRESS_FORM_UPDATE,
		payload: { prop, value }
	};
};

export const updateLongitudeAndLatitude = ({ longitude, latitude }) => {
	return {
		type: UPDATE_LONGITUDE_LATITUDE,
		payload: { longitude, latitude }
	};
};

export const resetLocation = () => {
	return {
		type: RESET_LOCATION
	};
};

export const resetState = () => {
	return {
		type: RESET_STATE
	};
};

export const updateAddressQuery = (text) => {
	return {
		type: UPDATE_ADDRESS_QUERY,
		payload: text
	};
};

/* delete this?
export const lookupCoordinates = (address) => {
	const GEOCODE_API_KEY = 'AIzaSyAcwn0XXXM1hoSGSDQiF7h9eHMkIo2gDVc';
	const parsed_address = address.split(' ').join('+');
	
	return function (dispatch) {
		dispatch({ type: LOOKUP_COORDINATES });

		axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${parsed_address}&key=${GEOCODE_API_KEY}`)
		.then(res => {
			dispatch({ type: LOOKUP_COORDINATES_SUCCESS, payload: res });
			console.log(res);
		})
		.catch((error) => {
			dispatch({ type: LOOKUP_COORDINATES_FAILED });
			console.log(error);
		});
	};
};
*/

