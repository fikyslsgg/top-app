import cn from 'classnames';
import styles from './P.module.css';
import { PProps } from './PProps';

export const P = ({
	size,
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.small]: size == 'small',
				[styles.big]: size == 'big',
			})}
			{...props}
		>
			{children}
		</p>
	);
};
