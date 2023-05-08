import styles from './Layout.module.scss';
import { ReactNode } from 'react';

interface LayoutProps {
	header?: ReactNode;
	sidebar?: ReactNode;
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header, sidebar, children }) => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>{header}</header>
			<div className={styles.sidebar}>{sidebar}</div>
			<main className={styles.body}>{children}</main>
		</div>
	);
};

export default Layout;
