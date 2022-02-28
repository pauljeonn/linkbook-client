import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	flex: 1;
	height: calc(100vh - 80px);
	position: sticky;
	top: 80px;
	background-color: ${styles.whiteColor};
`;

const Wrapper = styled.div``;

const Leftbar = () => {
	return (
		<Container>
			<Wrapper></Wrapper>
		</Container>
	);
};

export default Leftbar;
