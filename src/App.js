import './App.css';
import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthContext } from './contexts/authContext';

function App() {
	const { user, dispatch } = useContext(AuthContext);

	// 로컬스토리지에 저장된 유저가 있다면 해당 유저 객체를 전역 유저 상태로 설정
	useEffect(() => {
		const loginUser = localStorage.getItem('user');
		if (loginUser) {
			const parsedUser = JSON.parse(loginUser);
			dispatch({ type: 'LOGIN_SUCCESS', payload: parsedUser });
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={user ? <MainPage /> : <Navigate to="/login" />}
				/>
				<Route
					path="/profile/:id"
					element={user ? <ProfilePage /> : <Navigate to="/login" />}
				/>
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <LoginPage />}
				/>
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
