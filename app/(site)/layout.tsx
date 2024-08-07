import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const inter = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'top-app',
	description: 'Course rating application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
