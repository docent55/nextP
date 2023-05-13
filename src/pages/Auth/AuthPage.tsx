import { Input, Typography } from '@/shared/ui';
import Layout from '@/shared/ui/Layout/Layout';
import { Header, Sidebar } from '@/widgets';
import { useState } from 'react';

const AuthPage = () => {
	const [value, setValue] = useState('');

	const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<Layout header={<Header />}>
			<div className='w-[300px]'>
				<Input label="Test" onChange={handleChangeValue} value={value} />
			</div>
		</Layout>
	);
};

export default AuthPage;
