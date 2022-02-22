import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/authContext';
import { styles } from '../styles';

const Container = styled.div`
	flex: 1;
	height: calc(100vh - 80px);
	background-color: ${styles.whiteColor};
`;

const Wrapper = styled.div`
	padding: 10px;
`;

const SectionContainer = styled.div``;

const SectionTitle = styled.div`
	font-weight: 500;
`;

const FriendContainer = styled.div`
	padding: 10px;
`;

const FriendImg = styled.img``;

const FriendName = styled.div`
	cursor: pointer;
`;

const Rightbar = () => {
	const navigate = useNavigate();
	const params = useParams();

	const { user } = useContext(AuthContext);

	const [friends, setFriends] = useState([]);

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

	return (
		<Container>
			<Wrapper>
				<SectionContainer>
					<SectionTitle>Friends</SectionTitle>
					<FriendContainer>
						{friends.map((friend) => (
							<FriendName
								key={friend._id}
								onClick={() => navigate(`/profile/${friend._id}`)}
							>
								{friend.username}
							</FriendName>
						))}
					</FriendContainer>
				</SectionContainer>
			</Wrapper>
		</Container>
	);
};

export default Rightbar;
