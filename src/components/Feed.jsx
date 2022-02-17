import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import Post from './Post';
import Share from './Share';
import axios from 'axios';

const Container = styled.div`
	flex: 2;
	background-color: ${styles.lightGrayColor};
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Feed = () => {
	const [post, setPost] = useState({});

	useEffect(() => {
		const fetchPost = async () => {
			const res = await axios.get('posts/620e64dbabf0297796261348');
			setPost(res.data);
		};
		fetchPost();
	});

	return (
		<Container>
			<Share />
			<Post post={post} />
		</Container>
	);
};

export default Feed;
