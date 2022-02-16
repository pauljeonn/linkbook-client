import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import Share from './Share';

const Container = styled.div`
	flex: 2;
	height: 100%;
	background-color: ${styles.lightGrayColor};
	padding-top: 30px;
	display: flex;
	justify-content: center;
`;

const Feed = () => {
	return (
		<Container>
			<Share />
		</Container>
	);
};

export default Feed;
