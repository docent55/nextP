import Layout from '@/shared/ui/Layout/Layout';
import { Header, Sidebar } from '@/widgets';
import React from 'react';

const MainPage = () => {
	return (
		<Layout header={<Header />} sidebar={<Sidebar />}>
			MainPage
		</Layout>
	);
};

export default MainPage;
