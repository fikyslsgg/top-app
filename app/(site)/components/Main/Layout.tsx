import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import styles from './Layout.module.css';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
}
