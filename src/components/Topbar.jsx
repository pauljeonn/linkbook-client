import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/authContext';
import { styles } from '../styles';
import { MdOutlineArrowDropDownCircle, MdLogout } from 'react-icons/md';

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
	position: relative;
`;

const Left = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`;

const Logo = styled.div`
	font-size: 32px;
	font-weight: 700;
	color: white;
	user-select: none;
	cursor: pointer;
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

const UserInfo = styled.div`
	height: 100%;
	color: white;
	display: flex;
	justify-content: right;
	align-items: center;
	margin-right: 30px;
	cursor: pointer;
`;

const UserImg = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border: 2px solid white;
	border-radius: 50%;
	margin-right: 10px;
`;

const UserName = styled.div`
	font-size: 18px;
	user-select: none;
`;

const DropdownIcon = styled.div`
	font-size: 30px;
	color: white;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const Dropdown = styled.div`
	width: 140px;
	height: 50px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	position: absolute;
	bottom: -45px;
	right: 25px;
	display: ${(props) => (props.isDropdown ? 'flex' : 'none')};
	justify-content: center;
`;

const Logout = styled.div`
	color: black;
	display: flex;
	justify-content: right;
	align-items: center;
	cursor: pointer;
`;

const LogoutIcon = styled.div`
	font-size: 20px;
	margin-right: 8px;
	display: flex;
	align-items: center;
`;

const LogoutText = styled.div`
	user-select: none;
`;

const Topbar = () => {
	const navigate = useNavigate();

	const { user, dispatch } = useContext(AuthContext);

	const [isDropdown, setIsDropdown] = useState(false);

	const toggleDropdown = () => {
		setIsDropdown(!isDropdown);
	};

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
					<DropdownIcon onClick={toggleDropdown}>
						<MdOutlineArrowDropDownCircle />
					</DropdownIcon>
				</Right>
				<Dropdown isDropdown={isDropdown}>
					<Logout onClick={handleLogout}>
						<LogoutIcon>
							<MdLogout />
						</LogoutIcon>
						<LogoutText>로그아웃</LogoutText>
					</Logout>
				</Dropdown>
			</Wrapper>
		</Container>
	);
};

export default Topbar;
