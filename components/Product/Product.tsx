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

			const variants = {
				visible: {
					opacity: 1,
					heigh: 'auto',
				},
				hidden: {
					opacity: 0,
					heigh: 'auto',
				},
			};

			const scrollToReview = () => {
				setisReviewOpened(true);
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				reviewRef.current?.focus();
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
							<span className='visyallyHidden'>Цена</span>
							<span>{product.price}</span>
							{product.oldPrice && (
								<Tag className={cn(styles.oldPrice)} color='green'>
									<span className='visyallyHidden'>Скидка</span>
									<span>{product.price - product.oldPrice}</span>
								</Tag>
							)}
						</div>
						<div className={cn(styles.credit)}>
							<span className='visyallyHidden'>Кредит</span>
							<span>{product.credit}</span>
							<span className={cn(styles.month)}>месяцы</span>
						</div>
						<div className={cn(styles.rating)}>
							<span className='visyallyHidden'>
								{'Рейтинг' + (product.reviewAvg ?? product.initialRating)}
							</span>
							<Rating rating={product.reviewAvg ?? product.initialRating} />
						</div>
						<div className={cn(styles.tags)}>
							{product.categories.map(c => (
								<Tag key={c} color='ghost' className={cn(styles.category)}>
									{c}
								</Tag>
							))}
						</div>
						<div className={cn(styles.priceTitle)} aria-hidden='true'>
							цена
						</div>
						<div className={cn(styles.creditTitle)} aria-hidden='true'>
							кредит
						</div>
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
								aria-expanded={isReviewOpened}
							>
								читать отзывы
							</Button>
						</div>
					</Card>
					<motion.div
						animate={isReviewOpened ? 'visible' : 'hidden'}
						variants={variants}
						initial='hidden'
					>
						<Card
							color='blue'
							className={cn(styles.reviews)}
							ref={reviewRef}
							tabIndex={isReviewOpened ? 0 : -1}
						>
							{product.reviews.map(r => (
								<div key={r._id}>
									<Review review={r} />
									<Divider />
								</div>
							))}
							<ReviewForm productId={product._id} isOpened={isReviewOpened} />
						</Card>
					</motion.div>
				</div>
			);
		}
	)
);
