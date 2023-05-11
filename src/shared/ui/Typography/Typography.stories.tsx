import { Typography } from './Typography';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from 'next-themes';

const meta: Meta<typeof Typography> = {
	title: 'Typography',
	component: Typography,
	// parameters: {
	// 	variant: [
	// 		{ name: 'h1', value: 'h1' },
	// 		{ name: 'h2', value: 'h2' },
	// 		{ name: 'h3', value: 'h3' },
	// 	],
	// },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const VariantH1: Story = {
	args: {
		variant: 'h1',
		children: 'Story',
	},

	// render: () => <Typography variant='h1' >Typography H1</Typography>,
	// decorators: [
	// 	(Story) => (
	// 		<ThemeProvider defaultTheme='dark'>
	// 			<Story/>
	// 		</ThemeProvider>
	// 	)
	// ]
};
