import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles';

const Container = styled.div`
	flex: 1;
	height: calc(100vh - 80px);
	background-color: ${styles.whiteColor};
`;

const Leftbar = () => {
	return <Container>Leftbar</Container>;
};

export default Leftbar;
