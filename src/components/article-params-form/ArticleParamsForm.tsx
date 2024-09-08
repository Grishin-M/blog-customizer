import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import {
	defaultArticleState,
	ArticleStateType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from 'src/constants/articleProps';
import { useState } from 'react';
import clsx from 'clsx';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import styles from './ArticleParamsForm.module.scss';

type Props = {
	handleSetStyle: (newStyles: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ handleSetStyle }: Props) => {
	const [formState, setFormState] = useState(defaultArticleState);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const asideStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isDrawerOpen,
	});
	const handleOpenDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleSetStyle(formState);
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setFormState(defaultArticleState);
		handleSetStyle(defaultArticleState);
	};
	const handleOnChange = (field: keyof ArticleStateType) => {
		return (value: OptionType) => {
			setFormState((prevState) => ({ ...prevState, [field]: value }));
		};
	};
	return (
		<>
			<ArrowButton onClick={handleOpenDrawer} isOpen={isDrawerOpen} />
			<aside className={asideStyle}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} align='left' family='open-sans'>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={handleOnChange('fontFamilyOption')}
					/>
					<RadioGroup
						name='radio'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={handleOnChange('fontSizeOption')}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={formState.fontColor}
						onChange={handleOnChange('fontColor')}
					/>
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={handleOnChange('backgroundColor')}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={handleOnChange('contentWidth')}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
