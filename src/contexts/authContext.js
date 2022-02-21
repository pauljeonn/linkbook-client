import { createContext, useReducer } from 'react';
import AuthReducer from './authReducer';

const INTITIAL_STATE = {
	user: null,
	pending: false,
	error: false,
};

export const AuthContext = createContext(INTITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INTITIAL_STATE);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				pending: state.pending,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
