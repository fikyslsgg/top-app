import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import CloseIcon from './close-icon.svg';
import { IReviewForm } from './ReviewForm.interface';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';

export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IReviewForm>();

	const onSubmit = (data: IReviewForm) => {
		return data;
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Заполните имя' },
					})}
					placeholder='Имя'
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Заполните заголовок' },
					})}
					placeholder='Заголовок отзыва'
					error={errors.title}
					className={cn(styles.title)}
				/>
				<div>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						render={({ field }) => {
							return (
								<Rating
									isEditable
									setRating={field.onChange}
									className={cn(styles.rating)}
									rating={field.value}
									ref={field.ref}
								/>
							);
						}}
					></Controller>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните описание' },
					})}
					placeholder='Текст отзыва'
					className={cn(styles.description)}
					error={errors.description}
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
		</form>
	);
};
