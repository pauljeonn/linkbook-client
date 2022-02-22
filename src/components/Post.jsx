import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdOutlineThumbUp } from 'react-icons/md';
import { AuthContext } from '../contexts/authContext';

const Container = styled.div`
	width: 90%;
	margin: 20px 0;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	background-color: ${styles.whiteColor};
	padding: 20px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Top = styled.div``;

const UserName = styled.div`
	font-size: 16px;
	font-weight: 500;
`;

const Center = styled.div`
	padding: 26px 8px;
`;

const Text = styled.div`
	font-size: 15px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 14px;
`;

const Like = styled.div`
	height: 20px;
	display: flex;
	align-items: center;
`;

const LikeIcon = styled.div`
	margin-right: 5px;
	font-size: 18px;
	color: ${(props) => (props.isLiked ? styles.themeColor : styles.blackColor)};
	cursor: pointer;
`;

const Comment = styled.div``;

const Post = ({ post }) => {
	const { user: currentUser } = useContext(AuthContext);

	const [user, setUser] = useState({});
	const [likes, setLikes] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			// 게시물의 유저 아이디를 통해 유저 정보 불러오기
			const res = await axios.get(`users/${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	const handleLike = async () => {
		// 로컬 데이터 및 UI 핸들링
		setLikes(isLiked ? likes - 1 : likes + 1);
		setIsLiked(!isLiked);
		// 실제 좋아요 데이터 반영
		try {
			await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Wrapper>
				<Top>
					<UserName>{user.username}</UserName>
				</Top>
				<Center>
					<Text>{post.text}</Text>
				</Center>
				<Bottom>
					<Like>
						<LikeIcon onClick={handleLike} isLiked={isLiked}>
							<MdOutlineThumbUp />
						</LikeIcon>
						{post.likes && likes}개
					</Like>
					<Comment>댓글 {post.comments ? post.comments.length : ''}개</Comment>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Post;
