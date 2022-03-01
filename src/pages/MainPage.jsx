import React from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Topbar from '../components/Topbar';

const Container = styled.div`
	background-color: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 1600px;
	display: flex;
`;

const MainPage = () => {
	return (
		<Container>
			<Topbar />
			<Wrapper>
				<Leftbar />
				<Feed isProfile={false} />
				<Rightbar isProfile={false} />
			</Wrapper>
		</Container>
	);
};

export default MainPage;
