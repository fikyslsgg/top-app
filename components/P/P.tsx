import cn from 'classnames';
import styles from './P.module.css';
import { PProps } from './PProps';

export const P = ({
	appearance = 'medium',
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.small]: appearance == 'small',
				[styles.medium]: appearance == 'medium',
				[styles.big]: appearance == 'big',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
