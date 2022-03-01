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
				pending: false,
				error: false,
			};
		case 'FOLLOW':
			return {
				...state,
				user: {
					...state.user,
					following: [...state.user.following, action.payload],
				},
			};
		case 'UNFOLLOW':
			return {
				...state,
				user: {
					...state.user,
					following: state.user.following.filter(
						(following) => following !== action.payload
					),
				},
			};
		default:
			return state;
	}
};

export default AuthReducer;
