import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 60%;
	height: 400px;
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ThemeImg = styled.img`
	width: 250px;
	margin-bottom: 10px;
`;

const Logo = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 54px;
	font-weight: 700;
	color: ${styles.themeColor};
`;

const LogoText = styled.div`
	font-size: 16px;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RegisterContainer = styled.div`
	width: 220px;
	margin-bottom: 30px;
`;

const RegisterForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const RegisterInput = styled.input`
	width: 220px;
	height: 30px;
	margin-bottom: 5px;
	outline: none;
`;

const RegisterBtn = styled.button`
	height: 34px;
	border: none;
	background-color: ${styles.themeColor};
	color: ${styles.whiteColor};
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 5px;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const ErrorText = styled.div`
	color: ${styles.errorColor};
	font-size: 13px;
`;

const LoginText = styled.div`
	color: ${styles.themeColor};
	font-size: 14px;
	cursor: pointer;

	&:hover {
		filter: brightness(140%);
	}
`;

const RegisterPage = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const [isError, setIsError] = useState(false);
	const [error, setError] = useState('');

	const changeUsername = (e) => {
		setUsername(e.target.value);
	};

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};

	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const changePasswordConfirm = (e) => {
		setPasswordConfirm(e.target.value);
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		// ???????????? ??????
		if (password !== passwordConfirm) {
			setIsError(true);
			setError('??????????????? ??????????????????.');
		} else {
			const newUser = {
				username,
				email,
				password,
			};

			try {
				// ?????? ??????
				await axios.post('/auth/register', newUser);
				console.log('??????????????? ?????????????????????.');
				// ????????? ???????????? ??????
				navigate('/login');
			} catch (err) {
				console.log(err);
				setIsError(true);
				setError('??????????????? ?????????????????????. ?????? ????????? ????????? ??????????????????.');
			}
		}
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<ThemeImg src="/images/people.svg" alt="" />
					<Logo>LINKBOOK</Logo>
					<LogoText>???????????? ???????????? ????????? ???????????? ??????</LogoText>
				</Left>
				<Right>
					<RegisterContainer>
						<RegisterForm onSubmit={handleRegister}>
							<RegisterInput
								placeholder="??????"
								required
								onChange={(e) => changeUsername(e)}
								value={username}
							/>
							<RegisterInput
								placeholder="?????????"
								type="email"
								required
								onChange={(e) => changeEmail(e)}
							/>
							<RegisterInput
								placeholder="????????????"
								type="password"
								minLength="6"
								required
								onChange={(e) => changePassword(e)}
							/>
							<RegisterInput
								placeholder="???????????? ??????"
								type="password"
								minLength="6"
								required
								onChange={(e) => changePasswordConfirm(e)}
							/>
							<RegisterBtn type="submit">????????????</RegisterBtn>
						</RegisterForm>
						{isError && <ErrorText>{error}</ErrorText>}
					</RegisterContainer>
					<LoginText onClick={() => navigate('/login')}>?????????</LoginText>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default RegisterPage;
