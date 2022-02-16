import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	width: 90%;
	height: 200px;
	border-radius: 5px;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
	background-color: ${styles.whiteColor};
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
	return (
		<Container>
			<Wrapper>
				<Top>
					<ShareInput placeholder="무슨 생각을 하고 계신가요?" />
				</Top>
				<Hr />
				<Bottom>
					<BottomLeft></BottomLeft>
					<BottomRight>
						<ShareBtn>공유</ShareBtn>
					</BottomRight>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Share;
