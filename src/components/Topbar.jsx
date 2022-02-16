import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: ${styles.themeColor};
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	padding: 15px 25px;
`;

const Left = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`;

const Center = styled.div`
	flex: 3;
`;

const Right = styled.div`
	flex: 2;
`;

const Logo = styled.div`
	font-size: 32px;
	font-weight: 700;
	color: white;
	cursor: pointer;
`;

const Topbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>LINKBOOK</Logo>
				</Left>
				<Center></Center>
				<Right></Right>
			</Wrapper>
		</Container>
	);
};

export default Topbar;
