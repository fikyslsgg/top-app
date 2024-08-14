import cn from 'classnames';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import CloseIcon from './close-icon.svg';

export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	return (
		<>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input placeholder='Имя' />
				<Input placeholder='Заголовок отзыва' className={cn(styles.title)} />
				<div>
					<span>Оценка:</span>
					<Rating className={cn(styles.rating)} rating={0} />
				</div>
				<Textarea
					placeholder='Текст отзыва'
					className={cn(styles.description)}
				/>
				<div className={cn(styles.submit)}>
					<Button appearance='primary'>Отправить</Button>
					<span className={cn(styles.info)}>
						Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			<div className={cn(styles.success)}>
				<div className={cn(styles.successTitle)}>Ваш отзыв отправлен</div>
				<div>спасибо, Ваш отзыв будет опубликован после проверки</div>
				<CloseIcon className={cn(styles.close)} />
			</div>
		</>
	);
};
