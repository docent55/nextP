import { Input } from './Input';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

describe('Input', () => {
	it('render', () => {
		const textLabel: string = 'Test label';
		render(<Input label={textLabel} />);
		expect(screen.getByText(textLabel)).toBeInTheDocument();
	});

	it('toggle active', () => {
		const textLabel: string = 'Test label';
		render(<Input label={textLabel} data-testid="Input" />);

		const input = screen.getByTestId('Input');
		const label = screen.getByText(textLabel);

		fireEvent.focus(input);

		expect(label).toHaveClass('activeLabel');

		fireEvent.blur(input);

		expect(label).not.toHaveClass('activeLabel');
	});

	it('onChange must be called', () => {
		const textLabel: string = 'Test label';
		const handleChange = jest.fn();

		render(
			<Input label={textLabel} data-testid="Input" onChange={handleChange} />
		);

		const input = screen.getByTestId('Input');

		fireEvent.change(input, { target: { value: 'value' } });
    expect(handleChange).toHaveBeenCalledTimes(1)
	});
});
