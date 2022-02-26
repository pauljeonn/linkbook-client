import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../api';
import { AuthContext } from '../contexts/authContext';
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
	align-items: center;
`;

const Logo = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 54px;
	font-weight: 700;
	color: ${styles.themeColor};
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LoginContainer = styled.div`
	margin-top: 60px;
	margin-bottom: 30px;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const LoginInput = styled.input`
	width: 220px;
	height: 30px;
	margin-bottom: 5px;
	outline: none;
`;

const LoginBtn = styled.button`
	height: 34px;
	border: none;
	background-color: ${(props) =>
		props.pending ? styles.grayColor : styles.themeColor};
	color: ${styles.whiteColor};
	font-size: 16px;
	font-weight: 400;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const RegisterText = styled.div`
	color: ${styles.themeColor};
	font-size: 14px;
	cursor: pointer;

	&:hover {
		filter: brightness(140%);
	}
`;

const LoginPage = () => {
	const navigate = useNavigate();

	const email = useRef();
	const password = useRef();

	const { pending, dispatch } = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		// 비동기 로그인 함수 호출
		login(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>LINKBOOK</Logo>
				</Left>
				<Right>
					<LoginContainer>
						<LoginForm onSubmit={handleLogin}>
							<LoginInput placeholder="이메일" type="email" ref={email} />
							<LoginInput
								placeholder="비밀번호"
								type="password"
								ref={password}
							/>
							<LoginBtn type="submit" pending={pending}>
								로그인
							</LoginBtn>
						</LoginForm>
					</LoginContainer>
					<RegisterText onClick={() => navigate('/register')}>
						아직 회원이 아니신가요?
					</RegisterText>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default LoginPage;
