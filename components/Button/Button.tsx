import cn from 'classnames';
import { motion } from 'framer-motion';
import styles from './Buttom.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

export const Button = ({
	appearance: appearence,
	children,
	className,
	arrow = 'none',
	...props
}: ButtonProps): JSX.Element => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={cn(styles.button, className, {
				[styles.primary]: appearence == 'primary',
				[styles.ghost]: appearence == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down',
					})}
				>
					<ArrowIcon></ArrowIcon>
				</span>
			)}
		</motion.button>
	);
};
