import cn from 'classnames';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import styles from './Product.module.css';
import { ProductProps } from './ProductProps';

export const Product = ({ product }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={cn(styles.logo)}>
				<img
					src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
					alt={product.title}
				/>
			</div>
			<div className={cn(styles.title)}>{product.title}</div>
			<div className={cn(styles.price)}>{product.price}</div>
			<div className={cn(styles.credit)}>{product.credit}</div>
			<div className={cn(styles.rating)}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={cn(styles.tags)}>
				{product.categories.map(c => (
					<Tag key={c} color='ghost'>
						{c}
					</Tag>
				))}
			</div>
			<div className={cn(styles.priceTitle)}>цена</div>
			<div className={cn(styles.creditTitle)}>кредит</div>
			<div className={cn(styles.rateTitle)}>{product.reviewCount} отзывов</div>
			<div>
				<hr className={cn(styles.hr)} />
			</div>
			<div className={cn(styles.description)}>{product.description}</div>
			<div className={cn(styles.feature)}>feature</div>
			<div className={cn(styles.advBlock)}>
				<div className={cn(styles.advantages)}>
					<div>Преимущества</div>
					<div>{product.advantages}</div>
				</div>
				<div className={cn(styles.disadvantages)}>
					<div>Недостатки</div>
					<div>{product.disadvantages}</div>
				</div>
			</div>
			<div>
				<hr className={cn(styles.hr)} />
			</div>
			<div className={cn(styles.actions)}>
				<Button appearance='primary'> узнать подробнее</Button>
				<Button appearance='ghost' arrow='right'>
					читать отзывы
				</Button>
			</div>
		</Card>
	);
};
