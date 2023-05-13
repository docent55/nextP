import styles from './Input.module.scss';
import classNames from 'classnames';
import {
	DetailedHTMLProps,
	ForwardedRef,
	InputHTMLAttributes,
	forwardRef,
	useState,
} from 'react';

interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
	className?: string;
}

export const Input = forwardRef(
	(
		{ className, label, value, onChange, ...rest }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		const [isActive, setIsActive] = useState(false);

		const handleFocus = (): void => {
			setIsActive(true);
		};

		const handleBlur = (): void => {
			setIsActive(false);
		};

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
			if (!onChange) return;
			onChange(event);
		};

		return (
			<div className={styles.input}>
				<input
					{...rest}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={value}
					className={className}
					ref={ref}
				/>
				<label className={classNames({ [styles.activeLabel]: isActive || value })}>
					{label}
				</label>
			</div>
		);
	}
);

Input.displayName = 'Input';
