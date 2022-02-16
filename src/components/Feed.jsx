import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';
import Post from './Post';
import Share from './Share';

const Container = styled.div`
	flex: 2;
	background-color: ${styles.lightGrayColor};
	padding-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Feed = () => {
	return (
		<Container>
			<Share />
			<Post />
		</Container>
	);
};

export default Feed;
