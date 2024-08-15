import { API } from '@/app/api';
import axios from 'axios';
import cn from 'classnames';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import CloseIcon from './close-icon.svg';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
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
		reset,
	} = useForm<IReviewForm>();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(
				API.review.createDemo,
				{ ...formData, productId }
			);
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			setError(e.message);
		}
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
						rules={{
							required: { value: true, message: 'Укажите рейтинг' },
						}}
						name='rating'
						render={({ field }) => {
							return (
								<Rating
									isEditable
									setRating={field.onChange}
									className={cn(styles.rating)}
									rating={field.value}
									ref={field.ref}
									error={errors.rating}
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
			{isSuccess && (
				<div className={cn(styles.success)}>
					<div className={cn(styles.successTitle)}>Ваш отзыв отправлен</div>
					<div>спасибо, Ваш отзыв будет опубликован после проверки</div>
					<CloseIcon
						className={cn(styles.close)}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{error && (
				<div className={cn(styles.error)}>
					Что-то пошло не так, попробуйте обновить страницу
					<CloseIcon
						className={cn(styles.close)}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
