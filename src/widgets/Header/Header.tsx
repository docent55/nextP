// import { ToggleTheme } from '@/features';
import styles from './Header.module.scss';
import dynamic from 'next/dynamic';

const ToggleTheme = dynamic(() => import('@/features/ToggleTheme/ToggleTheme'), { ssr: false });

export const Header = () => {
	return (
		<div>
			Header!
			<ToggleTheme />
		</div>
	);
};
