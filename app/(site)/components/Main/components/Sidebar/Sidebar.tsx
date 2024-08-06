import Link from 'next/link';
import BooksIcon from '../../icons/books-icon.svg';
import CoursesIcon from '../../icons/courses-icon.svg';
import ProductsIcon from '../../icons/products-icon.svg';
import ServicesIcon from '../../icons/services-icon.svg';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<CoursesIcon className={styles.img} />
					<Link href={'/courses'}>Курсы</Link>
				</li>
				<li className={styles.item}>
					<ServicesIcon className={styles.img} />
					<Link href={'/services'}>Сервисы</Link>
				</li>
				<li className={styles.item}>
					<BooksIcon className={styles.img} />
					<Link href={'/books'}>Книги</Link>
				</li>
				<li className={styles.item}>
					<ProductsIcon className={styles.img} />
					<Link href={'/products'}>Продукты</Link>
				</li>
			</ul>
		</div>
	);
};
