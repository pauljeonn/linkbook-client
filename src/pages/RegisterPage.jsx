import axios from 'axios';
import React, { useRef } from 'react';
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
	font-size: 18px;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RegisterContainer = styled.div`
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
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
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

	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordConfirm = useRef();

	const handleRegister = async (e) => {
		e.preventDefault();

		// 비밀번호 비교
		if (password.current.value !== passwordConfirm.current.value) {
			password.current.setCustomValidity('비밀번호가 일치하지 않습니다.');
		} else {
			const newUser = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};

			try {
				// 회원 등록
				await axios.post('/auth/register', newUser);
				console.log('성공적으로 가입되었습니다.');
				// 로그인 페이지로 이동
				navigate('/login');
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<ThemeImg src="/images/people.svg" alt="" />

					<Logo>LINKBOOK</Logo>
					<LogoText>전세계 사람들과 소통하는 공간</LogoText>
				</Left>
				<Right>
					<RegisterContainer>
						<RegisterForm onSubmit={handleRegister}>
							<RegisterInput placeholder="이름" ref={username} required />
							<RegisterInput
								placeholder="이메일"
								type="email"
								ref={email}
								required
							/>
							<RegisterInput
								placeholder="비밀번호"
								type="password"
								ref={password}
								minLength="6"
								required
							/>
							<RegisterInput
								placeholder="비밀번호 확인"
								type="password"
								ref={passwordConfirm}
								minLength="6"
								required
							/>
							<RegisterBtn type="submit">회원가입</RegisterBtn>
						</RegisterForm>
					</RegisterContainer>
					<LoginText onClick={() => navigate('/login')}>로그인</LoginText>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default RegisterPage;
