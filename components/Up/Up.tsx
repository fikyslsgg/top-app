import { useScrollY } from '@/hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from './P.module.css';
import UpIcon from './up-icon.svg';

export const Up = (): JSX.Element => {
	const y = useScrollY();
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<motion.button
			className={styles.up}
			onClick={scrollToTop}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<UpIcon />
		</motion.button>
	);
};
