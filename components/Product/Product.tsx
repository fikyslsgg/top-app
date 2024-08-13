import cn from 'classnames';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Divider } from '../Divider/Divider';
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
			<div className={cn(styles.price)}>
				{product.price}
				{product.oldPrice && (
					<Tag className={cn(styles.oldPrice)} color='green'>
						{product.price - product.oldPrice}
					</Tag>
				)}
			</div>
			<div className={cn(styles.credit)}>
				{product.credit} / <span className={cn(styles.month)}>месяцы</span>
			</div>
			<div className={cn(styles.rating)}>
				<Rating rating={product.reviewAvg ?? product.initialRating} />
			</div>
			<div className={cn(styles.tags)}>
				{product.categories.map(c => (
					<Tag key={c} color='ghost' className={cn(styles.category)}>
						{c}
					</Tag>
				))}
			</div>
			<div className={cn(styles.priceTitle)}>цена</div>
			<div className={cn(styles.creditTitle)}>кредит</div>
			<div className={cn(styles.rateTitle)}>
				{product.reviewCount}{' '}
				{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}отзывов
			</div>
			<div>
				<Divider className={cn(styles.hr)} />
			</div>
			<div className={cn(styles.description)}>{product.description}</div>
			<div className={cn(styles.feature)}>feature</div>
			<div className={cn(styles.advBlock)}>
				<div className={cn(styles.advantages)}>
					<div className={cn(styles.advTitle)}>Преимущества</div>
					<div>{product.advantages}</div>
				</div>
				{product.disadvantages && (
					<div className={cn(styles.disadvantages)}>
						<div className={cn(styles.advTitle)}>Недостатки</div>
						<div>{product.disadvantages}</div>
					</div>
				)}
			</div>
			<div>
				<Divider className={cn(styles.hr)} />
			</div>
			<div className={cn(styles.actions)}>
				<Button appearance='primary'> узнать подробнее</Button>
				<Button
					appearance='ghost'
					arrow='right'
					className={cn(styles.reviewButton)}
				>
					читать отзывы
				</Button>
			</div>
		</Card>
	);
};
