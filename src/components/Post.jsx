import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

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

const Like = styled.div``;

const Comment = styled.div``;

const Post = ({ post }) => {
	return (
		<Container>
			<Wrapper>
				<Top>
					<UserName>전바울</UserName>
				</Top>
				<Center>
					<Text>{post.text}</Text>
				</Center>
				<Bottom>
					<Like>좋아요 {post.likes ? post.likes.length : ''}개</Like>
					<Comment>댓글 {post.comments ? post.comments.length : ''}개</Comment>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Post;
