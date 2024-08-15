import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = forwardRef(
	(
		{ className, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<textarea
				className={cn(className, styles.input)}
				ref={ref}
				{...props}
			></textarea>
		);
	}
);
