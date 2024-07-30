import { MenuItem } from '@/interfaces/menu.interface';
import MainLayout from './components/Main/Layout';
import Menu from './components/menu';

export default async function Home() {
	return (
		<MainLayout>
			<Menu></Menu>
		</MainLayout>
	);
}

export interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
