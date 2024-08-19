'use client';

import { Up } from '@/components';
import cn from 'classnames';
import { useRef, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import styles from './Layout.module.css';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isSkipLinkDisplaed, setIsSkipLinkDisplaed] = useState<boolean>(false);
	const bodyRef = useRef<HTMLDivElement>(null);

	const skipContentAction = (key: KeyboardEvent) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			bodyRef.current?.focus();
		}
		setIsSkipLinkDisplaed(false);
	};
	return (
		<div className={styles.wrapper}>
			<a
				onKeyDown={skipContentAction}
				onFocus={() => setIsSkipLinkDisplaed(true)}
				tabIndex={1}
				className={cn(styles.skipLink, {
					[styles.displayed]: isSkipLinkDisplaed,
				})}
			>
				Сразу к содержанию
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div ref={bodyRef} tabIndex={0} className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer} />
			<Up />
		</div>
	);
}
