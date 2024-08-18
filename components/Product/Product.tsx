'use client';

import { declOfNum } from '@/helpers/helpers';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Divider } from '../Divider/Divider';
import { Rating } from '../Rating/Rating';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Tag } from '../Tag/Tag';
import styles from './Product.module.css';
import { ProductProps } from './ProductProps';

export const Product = motion(
	forwardRef(
		(
			{ product, className, ...props }: ProductProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [isReviewOpened, setisReviewOpened] = useState<boolean>(false);
			const reviewRef = useRef<HTMLDivElement>(null);

			const scrollToReview = () => {
				setisReviewOpened(true);
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			};

			return (
				<div className={className} {...props} ref={ref}>
					<Card className={styles.product}>
						<div className={cn(styles.logo)}>
							<Image
								src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
								alt={product.title}
								width={70}
								height={70}
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
							{product.credit} /{' '}
							<span className={cn(styles.month)}>месяцы</span>
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
							<a href='#' onClick={scrollToReview}>
								{product.reviewCount}+
								{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
							</a>
						</div>
						<div>
							<Divider className={cn(styles.hr)} />
						</div>
						<div className={cn(styles.description)}>{product.description}</div>
						<div className={cn(styles.feature)}>
							{product.characteristics.map(c => (
								<div className={styles.characteristics} key={c.name}>
									<span className={styles.characteristicsName}>{c.name}</span>
									<span className={styles.characteristicsDots}></span>
									<span className={styles.characteristicsValue}>{c.value}</span>
								</div>
							))}
						</div>
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
							<Divider className={cn(styles.hr2)} />
						</div>
						<div className={cn(styles.actions)}>
							<Button appearance='primary'> узнать подробнее</Button>
							<Button
								appearance='ghost'
								arrow={isReviewOpened ? 'down' : 'right'}
								className={cn(styles.reviewButton)}
								onClick={() => setisReviewOpened(!isReviewOpened)}
							>
								читать отзывы
							</Button>
						</div>
					</Card>
					<Card
						color='blue'
						className={cn(styles.reviews, {
							[styles.opened]: isReviewOpened,
							[styles.closed]: !isReviewOpened,
						})}
						ref={reviewRef}
					>
						{product.reviews.map(r => (
							<div key={r._id}>
								<Review review={r} />
								<Divider />
							</div>
						))}
						<ReviewForm productId={product._id} />
					</Card>
				</div>
			);
		}
	)
);
