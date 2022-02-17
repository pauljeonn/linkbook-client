import React from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Topbar from '../components/Topbar';

const Container = styled.div``;

const Wrapper = styled.div`
	display: flex;
`;

const MainPage = () => {
	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Leftbar />
				<Feed />
				<Rightbar />
			</Wrapper>
		</Container>
	);
};

export default MainPage;
