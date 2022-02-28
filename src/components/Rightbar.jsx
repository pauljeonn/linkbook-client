import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/authContext';
import { styles } from '../styles';
import { MdOutlinePersonAddAlt } from 'react-icons/md';

const Container = styled.div`
	flex: 1;
	height: calc(100vh - 80px);
	position: sticky;
	top: 80px;
	background-color: ${styles.whiteColor};
`;

const Wrapper = styled.div`
	padding: 30px 20px;
`;

const FollowBtn = styled.button`
	width: 100px;
	height: 35px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: white;
	font-size: 15px;
	font-weight: 400;
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const FollowIcon = styled.div`
	font-size: 20px;
	margin-right: 5px;
	display: flex;
`;

const SectionContainer = styled.div`
	margin-bottom: 20px;
`;

const SectionTitle = styled.div`
	font-weight: 500;
`;

const FriendList = styled.div`
	padding: 12px 5px;
`;

const FriendInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
`;

const FriendImg = styled.img`
	width: 24px;
	height: 24px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 5px;
`;

const RecommendedList = styled.div``;

const FriendName = styled.div`
	cursor: pointer;
`;

const Rightbar = ({ isProfile }) => {
	const navigate = useNavigate();
	const params = useParams();

	const { user } = useContext(AuthContext);

	const [friends, setFriends] = useState([]);
	const [recommended, setRecommended] = useState([]);
	const [following, setFollowing] = useState(false);

	useEffect(() => {
		const fetchFriends = async () => {
			try {
				//프로필 페이지 방문 시 해당 유저의 포스트만 불러오기
				if (params.id) {
					const res = await axios.get(`/users/friends/${params.id}`);
					setFriends(res.data);
				} else {
					const res = await axios.get(`users/friends/${user._id}`);
					setFriends(res.data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchFriends();
	}, [user._id, params.id]);

	useEffect(() => {
		setFollowing(user.following.includes(params?.id));
	}, [user.following, params.id]);

	// 팔로우 & 언팔로우
	const handleFollow = async () => {
		try {
			if (following) {
				console.log('언팔');
				const res = await axios.put(`/users/${user._id}/unfollow`, {
					userId: params.id,
				});
				console.log(res);
			} else {
				console.log('팔');
				await axios.put(`/users/${user._id}/follow`, {
					userId: params.id,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Wrapper>
				{isProfile && user._id !== params.id && (
					<FollowBtn onClick={handleFollow}>
						{following ? (
							''
						) : (
							<FollowIcon>
								<MdOutlinePersonAddAlt />
							</FollowIcon>
						)}
						{following ? '언팔로우' : '팔로우'}
					</FollowBtn>
				)}
				{/* 친구가 존재할 경우에 친구 목록 보이기 */}
				{friends.length > 0 && (
					<SectionContainer>
						<SectionTitle>팔로잉</SectionTitle>
						<FriendList>
							{friends.map((friend) => (
								<FriendInfo key={friend._id}>
									<FriendImg
										src={
											friend.profilePicture
												? friend.profilePicture
												: '/images/default.jpeg'
										}
									/>
									<FriendName
										onClick={() => navigate(`/profile/${friend._id}`)}
									>
										{friend.username}
									</FriendName>
								</FriendInfo>
							))}
						</FriendList>
					</SectionContainer>
				)}
				<SectionContainer>
					<SectionTitle>추천</SectionTitle>
					<RecommendedList></RecommendedList>
				</SectionContainer>
			</Wrapper>
		</Container>
	);
};

export default Rightbar;
