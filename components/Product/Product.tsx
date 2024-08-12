import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import styles from './Product.module.css';
import { ProductProps } from './ProductProps';

export const Product = ({ product }: ProductProps): JSX.Element => {
	return (
		<Card>
			<div className={cn(styles.logo)}>
				<img src={product.image} alt={product.title} />
			</div>
			<div className={cn(styles.title)}>{product.title}</div>
			<div className={cn(styles.price)}>{product.price}</div>
			<div className={cn(styles.credit)}>{product.credit}</div>
			<div className={cn(styles.rating)}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={cn(styles.credit)}>
				{product.categories.map(c => (
					<Tag key={c} color='ghost'>
						{c}
					</Tag>
				))}
			</div>
			<div className={cn(styles.priceTitle)}>цена</div>
			<div className={cn(styles.creditTitle)}>кредит</div>
			<div className={cn(styles.rateTitle)}>{product.reviewCount} отзывов</div>
		</Card>
	);
};
