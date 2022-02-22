import axios from 'axios';

export const login = async (userData, dispatch) => {
	dispatch({ type: 'LOGIN_START' });
	try {
		const res = await axios.post('/auth/login', userData);
		// 로컬스토리지에 유저 객체 저장
		localStorage.setItem('user', JSON.stringify(res.data));
		dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
	} catch (err) {
		dispatch({ type: 'LOGIN_FAILURE', payload: err });
	}
};
