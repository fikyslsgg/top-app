import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
}
