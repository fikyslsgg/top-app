import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './TagProps';

export const Tag = ({
	size = 'small',
	color = 'ghost',
	children,
	href,
	className,
	...props
}: TagProps): JSX.Element => {
	return (
		<p
			className={cn(styles.tag, className, {
				[styles.small]: size == 'small',
				[styles.big]: size == 'big',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.grey]: color == 'grey',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children} </>}
		</p>
	);
};
