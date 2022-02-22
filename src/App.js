import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthContext } from './contexts/authContext';

function App() {
	const { user } = useContext(AuthContext);

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
