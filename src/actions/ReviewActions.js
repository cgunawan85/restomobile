import {
	ADD_REVIEW_FORM_UPDATE,
} from './types';

export const addReviewFormUpdate = ({ prop, value }) => {
	return {
		type: ADD_REVIEW_FORM_UPDATE,
		payload: { prop, value }
	};
};
