import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import Post from './Post';
import Share from './Share';
import axios from 'axios';
import { AuthContext } from '../contexts/authContext';

const Container = styled.div`
	flex: 2;
	background-color: ${styles.lightGrayColor};
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Feed = () => {
	const { user } = useContext(AuthContext);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await axios.get(`posts/timeline/${user._id}`);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPosts();
	}, [user._id]);

	return (
		<Container>
			<Share />
			{posts.map((post) => (
				<Post key={post._id} post={post} />
			))}
		</Container>
	);
};

export default Feed;
