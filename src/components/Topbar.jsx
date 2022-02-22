import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/authContext';
import { styles } from '../styles';

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: ${styles.themeColor};
	position: sticky;
	top: 0;
	z-index: 5;
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
`;

const UserInfo = styled.div`
	height: 100%;
	color: white;
	display: flex;
	justify-content: right;
	align-items: center;
	cursor: pointer;
`;

const UserImg = styled.img`
	width: 46px;
	height: 46px;
	border: 1px solid white;
	border-radius: 50%;
	margin-right: 10px;
`;

const UserName = styled.div``;

const Logo = styled.div`
	font-size: 32px;
	font-weight: 700;
	color: white;
	cursor: pointer;
`;

const Topbar = () => {
	const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo onClick={() => navigate('/')}>LINKBOOK</Logo>
				</Left>
				<Center></Center>
				<Right>
					<UserInfo onClick={() => navigate(`/profile/${user._id}`)}>
						<UserImg
							src={
								user.profilePicture
									? user.profilePicture
									: '/images/default.jpeg'
							}
						/>
						<UserName>{user.username}</UserName>
					</UserInfo>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Topbar;
