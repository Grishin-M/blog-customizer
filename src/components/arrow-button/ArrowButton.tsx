import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type Props = {
	isOpen: boolean;
	onClick: () => void;
};

export const ArrowButton = ({ isOpen, onClick }: Props) => {
	const arrowButtonStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	const arrowImage = clsx({
		[styles.arrow]: true,
		[styles.arrow_open]: isOpen,
	});

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={arrowButtonStyle}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={arrowImage} />
		</div>
	);
};
