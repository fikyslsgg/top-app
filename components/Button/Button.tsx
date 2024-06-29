import cn from 'classnames';
import styles from './Buttom.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({
	appearance: appearence,
	children,
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearence == 'primary',
				[styles.ghost]: appearence == 'ghost',
			})}
		>
			{children}
		</button>
	);
};
