import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import { MdOutlineThumbUp, MdOutlineMoreVert } from 'react-icons/md';
import { AuthContext } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	width: 90%;
	margin: 20px 0;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	background-color: ${styles.whiteColor};
	padding: 20px;
`;

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: ${(props) => (props.isDelete ? 10 : -10)};
`;

const ConfirmContainer = styled.div`
	width: 400px;
	height: 150px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
`;

const ConfirmHeader = styled.div`
	height: 50px;
	background-color: ${styles.themeColor};
	color: white;
	padding: 10px;
`;

const ConfirmBody = styled.div`
	height: 50px;
	padding: 10px;
`;

const ConfirmButtonContainer = styled.div`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ConfirmBtn = styled.button`
	width: 80px;
	height: 30px;
	margin: 0 10px;
	border: none;
	background-color: ${styles.themeColor};
	color: white;
	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
`;

const UserInfo = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const UserImg = styled.img`
	width: 28px;
	height: 28px;
	border-radius: 50%;
	margin-right: 5px;
`;

const UserName = styled.div`
	font-size: 16px;
	font-weight: 500;
`;

const MoreIcon = styled.div`
	cursor: pointer;
`;

const MoreContainer = styled.div`
	width: 80px;
	height: 50px;
	background-color: white;
	position: absolute;
	right: 18px;
	z-index: ${(props) => (props.isMore ? 3 : -3)};
`;

const MoreItem = styled.div`
	height: 50%;
	border: 1px solid ${styles.GrayColor};
	font-size: 14px;
	text-align: center;
	user-select: none;
	cursor: pointer;
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
	const navigate = useNavigate();
	const { user: currentUser } = useContext(AuthContext);

	const [user, setUser] = useState({});
	const [likes, setLikes] = useState(post.likes.length);
	// 현재 접속한 유저의 좋아요 여부에 따라 isLiked 초기 설정하기
	const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser._id));
	const [isMore, setIsMore] = useState(false);
	const [isDelete, setIsDelete] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			// 게시물의 유저 아이디를 통해 유저 정보 불러오기
			const res = await axios.get(`/users/${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	const toggleMore = () => {
		setIsMore(!isMore);
	};

	// 게시물 삭제 컨펌 toggle
	const toggleDelete = () => {
		setIsDelete(!isDelete);
	};

	// 게시물 삭제
	const confirmDelete = async () => {
		try {
			await axios.delete(`/posts/${post._id}`, {
				data: { userId: currentUser._id },
			});
			// 게시물 삭제 후 새로고침
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	// 좋아요
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
			<Overlay isDelete={isDelete}>
				<ConfirmContainer>
					<ConfirmHeader>게시물 삭제</ConfirmHeader>
					<ConfirmBody>해당 게시물을 정말 삭제하시겠습니까?</ConfirmBody>
					<ConfirmButtonContainer>
						<ConfirmBtn onClick={toggleDelete}>취소</ConfirmBtn>
						<ConfirmBtn onClick={confirmDelete}>확인</ConfirmBtn>
					</ConfirmButtonContainer>
				</ConfirmContainer>
			</Overlay>
			<Wrapper>
				<Top>
					<UserInfo onClick={() => navigate(`/profile/${user._id}`)}>
						<UserImg
							src={
								user.profilePicture
									? user.profilePicture
									: '/images/default.jpeg'
							}
						/>
						<UserName>{user.username}</UserName>
					</UserInfo>
					<MoreIcon onClick={toggleMore}>
						<MdOutlineMoreVert />
					</MoreIcon>
					<MoreContainer isMore={isMore}>
						<MoreItem>수정</MoreItem>
						<MoreItem onClick={toggleDelete}>삭제</MoreItem>
					</MoreContainer>
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
