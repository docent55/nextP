import { Typography } from '@/shared/ui';
import Layout from '@/shared/ui/Layout/Layout';
import { Header, Sidebar } from '@/widgets';
import React from 'react';

const MainPage = () => {
	return (
		<Layout header={<Header />}>
			<Typography variant="h1">222</Typography>
			<Typography variant="h2">222</Typography>
			<Typography variant="h3">222</Typography>
			<Typography variant="h4">222</Typography>
			<Typography variant="h5">222</Typography>
			<Typography variant="h6">222</Typography>
			<Typography variant="body">222</Typography>
			<Typography variant="body-small">222</Typography>
			<Typography variant="small">222</Typography>
		</Layout>
	);
};

export default MainPage;
