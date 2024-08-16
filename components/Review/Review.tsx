import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Rating } from '../Rating/Rating';
import styles from './Review.module.css';
import { ReviewProps } from './Review.props';
import UserIcon from './user-icon.svg';

export const Review = ({
	review,
	className,
	...props
}: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
	return (
		<div className={cn(styles.review, className)} {...props}>
			<UserIcon className={cn(styles.user)} />
			<div className={cn(styles.title)}>
				<span className={cn(styles.name)}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={cn(styles.date)}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
			</div>
			<div className={cn(styles.rating)}>
				<Rating rating={rating} />
			</div>
			<div className={cn(styles.description)}>{description}</div>
		</div>
	);
};
