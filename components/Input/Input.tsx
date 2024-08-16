import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = forwardRef(
	(
		{ className, error, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={cn(styles.inputWrapper, className)}>
				<input
					className={cn(styles.input, {
						[styles.error]: error,
					})}
					ref={ref}
					{...props}
				></input>
				<span className={styles.errorMessages}>{error && error.message}</span>
			</div>
		);
	}
);
