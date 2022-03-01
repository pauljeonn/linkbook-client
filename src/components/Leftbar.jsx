import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	flex: 1;
	height: calc(100vh - ${styles.topbarHeight});
	position: sticky;
	top: 80px;
	background-color: #fefefe;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	padding: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledImg = styled.img`
	width: 70%;
`;

const Leftbar = () => {
	return (
		<Container>
			<Wrapper>
				<StyledImg src={`/images/illust-1.svg`} />
			</Wrapper>
		</Container>
	);
};

export default Leftbar;
