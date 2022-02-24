const AuthReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN_START':
			return {
				user: null,
				pending: true,
				error: false,
			};
		case 'LOGIN_SUCCESS':
			return {
				user: action.payload,
				pending: false,
				error: false,
			};
		case 'LOGIN_FAILURE':
			return {
				user: null,
				pending: false,
				error: action.payload,
			};
		case 'LOGOUT':
			return {
				user: null,
			};
		default:
			return state;
	}
};

export default AuthReducer;
