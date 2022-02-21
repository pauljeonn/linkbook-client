import axios from 'axios';

export const login = async (userData, dispatch) => {
	console.log(userData);
	dispatch({ type: 'LOGIN_START' });
	try {
		const res = await axios.post('/auth/login', userData);
		dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
	} catch (err) {
		dispatch({ type: 'LOGIN_FAILURE', payload: err });
	}
};
