import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Topbar from '../components/Topbar';

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
`;

const ProfileWrapper = styled.div`
	flex: 3;
`;

const ProfileCover = styled.div`
	height: 280px;
	background-color: skyblue;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const ProfileCoverImg = styled.img`
	width: 100%;
	height: 280px;
`;

const ProfileUserImg = styled.img`
	width: 140px;
	height: 140px;
	background-color: pink;
	border: 5px solid white;
	border-radius: 50%;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	bottom: -20px;
	z-index: 3;
`;

const ProfileUserName = styled.div`
	height: 100px;
	background-color: white;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProfileRightBottom = styled.div`
	display: flex;
`;

const ProfilePage = () => {
	const params = useParams();

	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			// 프로필 유저 정보 가져오기
			const res = await axios.get(`/users/${params.id}`);
			setUser(res.data);
		};
		fetchUser();
	}, [params.id]);

	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Leftbar />
				<ProfileWrapper>
					<ProfileCover>
						<ProfileCoverImg />
						<ProfileUserImg />
					</ProfileCover>
					<ProfileUserName>{user.username}</ProfileUserName>
					<ProfileRightBottom>
						<Feed />
						<Rightbar />
					</ProfileRightBottom>
				</ProfileWrapper>
			</Wrapper>
		</Container>
	);
};

export default ProfilePage;
