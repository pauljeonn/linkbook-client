import axios from 'axios';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/authContext';
import { styles } from '../styles';
import { MdCameraAlt } from 'react-icons/md';

const Container = styled.div`
	width: 90%;
	height: 200px;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	background-color: ${styles.whiteColor};
	margin-bottom: 12px;
`;

const Wrapper = styled.div`
	height: 100%;
	padding: 0 15px;
	display: flex;
	flex-direction: column;
`;

const Top = styled.div`
	height: 65%;
	display: flex;
	align-items: center;
	padding-left: 10px;
`;

const ShareInput = styled.input`
	width: 70%;
	height: 50px;
	border: none;
	outline: none;
`;

const Hr = styled.hr``;

const Bottom = styled.div`
	height: 35%;
	display: flex;
`;

const BottomLeft = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	/* background-color: pink; */
`;

const PhotoIcon = styled.div`
	color: black;
	font-size: 22px;
	margin: 0 4px;
`;

const PhotoText = styled.div`
	font-size: 14px;
	margin-bottom: 4px;
`;

const BottomRight = styled.div`
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: right;
`;

const ShareBtn = styled.button`
	width: 68px;
	height: 32px;
	border: none;
	border-radius: 5px;
	background-color: ${styles.themeColor};
	color: ${styles.whiteColor};
	font-size: 15px;
	cursor: pointer;
`;

const Share = () => {
	const { user } = useContext(AuthContext);

	const [text, setText] = useState('');

	const changeShareText = (e) => {
		setText(e.target.value);
	};

	const handleShare = async () => {
		const newPost = {
			userId: user._id,
			text: text,
		};
		await axios.post('/posts', newPost);
		// 게시물 공유 후 리렌더링을 위해 윈도우 리로딩
		window.location.reload();
	};

	return (
		<Container>
			<Wrapper>
				<Top>
					<ShareInput
						placeholder="무슨 생각을 하고 계신가요?"
						onChange={changeShareText}
						value={text}
					/>
				</Top>
				<Hr />
				<Bottom>
					<BottomLeft>
						<PhotoIcon>
							<MdCameraAlt />
						</PhotoIcon>
						<PhotoText>사진</PhotoText>
					</BottomLeft>
					<BottomRight>
						<ShareBtn onClick={handleShare}>공유</ShareBtn>
					</BottomRight>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Share;
