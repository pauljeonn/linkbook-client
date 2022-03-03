import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Topbar from '../components/Topbar';
import { styles } from '../styles';

const Container = styled.div`
	background-color: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1600px;
	display: flex;
`;

const ProfileWrapper = styled.div`
	flex: 3;
`;

const ProfileRightTop = styled.div``;

const ProfileCover = styled.div`
	width: 100%;
	height: ${styles.profileCoverHeight};
	background-color: skyblue;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 5;
`;

const ProfileCoverImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ProfileUserImg = styled.img`
	width: 180px;
	height: 180px;
	object-fit: cover;
	background-color: white;
	border: 5px solid white;
	border-radius: 50%;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	bottom: ${styles.profileImgPaddingBottom};
	z-index: 3;
`;

const ProfileUserName = styled.div`
	height: ${styles.profileNameHeight};
	background-color: white;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: ${styles.profileNamePaddingBottom};
`;

const ProfileRightBottom = styled.div`
	display: flex;
`;

const ProfilePage = () => {
	const params = useParams();

	const [user, setUser] = useState({});

	useEffect(() => {
		// 다른 사용자 프로필 방문 시 페이지 상단으로 스크롤
		window.scrollTo(0, 0);
	}, [params.id]);

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
					<ProfileRightTop>
						<ProfileCover>
							<ProfileCoverImg
								src={
									user.coverPicture ? user.coverPicture : '/images/cover.jpeg'
								}
								alt=""
							/>
							<ProfileUserImg
								src={
									user.profilePicture
										? user.profilePicture
										: '/images/default.jpeg'
								}
							/>
						</ProfileCover>
						<ProfileUserName>{user.username}</ProfileUserName>
					</ProfileRightTop>
					<ProfileRightBottom>
						<Feed isProfile={true} />
						<Rightbar isProfile={true} />
					</ProfileRightBottom>
				</ProfileWrapper>
			</Wrapper>
		</Container>
	);
};

export default ProfilePage;
