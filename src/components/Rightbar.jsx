import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

	const { user } = useContext(AuthContext);

	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const fetchFriends = async () => {
			const res = await axios.get(`users/friends/${user._id}`);
			setFriends(res.data);
		};
		fetchFriends();
	}, [user._id]);

	return (
		<Container>
			<Wrapper>
				<SectionContainer>
					<SectionTitle>친구 목록</SectionTitle>
					<FriendContainer>
						{friends.map((friend) => (
							<FriendName onClick={() => navigate(`/profile/${friend._id}`)}>
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
