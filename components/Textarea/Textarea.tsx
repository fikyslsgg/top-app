import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = forwardRef(
	(
		{ error, className, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(styles.textareaWrapper, className)}>
				<textarea
					className={cn(styles.textarea, {
						[styles.error]: error,
					})}
					ref={ref}
					{...props}
				></textarea>
				{error && (
					<span role='alert' className={styles.errorMessages}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
