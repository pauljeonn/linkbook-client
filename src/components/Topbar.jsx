import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/authContext';
import { styles } from '../styles';
import { MdLogout } from 'react-icons/md';

const Container = styled.div`
	width: 100%;
	height: ${styles.topbarHeight};
	background-color: ${styles.themeColor};
	position: sticky;
	top: 0;
	z-index: 10;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	padding: 15px 25px;
`;

const Left = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`;

const Center = styled.div`
	flex: 3;
`;

const Right = styled.div`
	flex: 2;
	display: flex;
	justify-content: right;
	align-items: center;
`;

const Logout = styled.div`
	color: white;
	margin-right: 40px;
	display: flex;
	cursor: pointer;
`;

const LogoutIcon = styled.div`
	margin-right: 4px;
	display: flex;
	align-items: center;
`;

const UserInfo = styled.div`
	height: 100%;
	color: white;
	display: flex;
	justify-content: right;
	align-items: center;
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	object-fit: cover;
	border: 1px solid white;
	border-radius: 50%;
	margin-right: 10px;
	cursor: pointer;
`;

const Logo = styled.div`
	font-size: 32px;
	font-weight: 700;
	color: white;
	cursor: pointer;
`;

const Topbar = () => {
	const navigate = useNavigate();

	const { user, dispatch } = useContext(AuthContext);

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' }); // Context 유저 객체 제거
		localStorage.clear(); // 로컬스토리지에서 유저 객체 삭제
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo onClick={() => navigate('/')}>LINKBOOK</Logo>
				</Left>
				<Center></Center>
				<Right>
					<Logout onClick={handleLogout}>
						<LogoutIcon>
							<MdLogout />
						</LogoutIcon>
						로그아웃
					</Logout>
					<UserInfo onClick={() => navigate(`/profile/${user._id}`)}>
						<UserImg
							src={
								user.profilePicture
									? user.profilePicture
									: '/images/default.jpeg'
							}
						/>
					</UserInfo>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Topbar;
