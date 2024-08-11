import cn from 'classnames';
import styles from './Input.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = ({
	className,
	...props
}: TextareaProps): JSX.Element => {
	return (
		<textarea className={cn(className, styles.input)} {...props}></textarea>
	);
};
