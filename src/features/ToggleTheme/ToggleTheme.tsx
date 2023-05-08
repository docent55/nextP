import { useTheme } from 'next-themes';
import React from 'react';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
	return (
		<button
			onClick={() => {
				setTheme(theme === 'dark' ? 'lighht' : 'dark');
			}}
		>
			Toggle thems {theme}
		</button>
	);
};

export default ToggleTheme;