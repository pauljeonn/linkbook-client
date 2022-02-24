import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import Post from './Post';
import Share from './Share';
import axios from 'axios';
import { AuthContext } from '../contexts/authContext';
import { useParams } from 'react-router-dom';

const Container = styled.div`
	flex: 2;
	background-color: ${styles.lightGrayColor};
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Feed = () => {
	const params = useParams();

	const { user } = useContext(AuthContext);

	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				//프로필 페이지 방문 시 해당 유저의 포스트만 불러오기
				if (params.id) {
					const res = await axios.get(`/posts/profile/${params.id}`);
					// 게시물 최신순으로 정렬하기
					setPosts(
						res.data.sort((a, b) => {
							return new Date(b.createdAt) - new Date(a.createdAt);
						})
					);
				} else {
					const res = await axios.get(`/posts/timeline/${user._id}`);
					// 게시물 최신순으로 정렬하기
					setPosts(
						res.data.sort((a, b) => {
							return new Date(b.createdAt) - new Date(a.createdAt);
						})
					);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchPosts();
	}, [user._id, params.id]);

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
