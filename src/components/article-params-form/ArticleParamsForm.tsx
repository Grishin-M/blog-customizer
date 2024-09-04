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

const initialState = {
	fontFamilyOption: defaultArticleState.fontFamilyOption,
	fontColor: defaultArticleState.fontColor,
	backgroundColor: defaultArticleState.backgroundColor,
	contentWidth: defaultArticleState.contentWidth,
	fontSizeOption: defaultArticleState.fontSizeOption,
};

type Props = {
	isOpen: boolean;
	handleSetStyle: (newStyles: ArticleStateType) => void;
	handleOpen: () => void;
};

export const ArticleParamsForm = ({
	isOpen,
	handleSetStyle,
	handleOpen,
}: Props) => {
	const [state, setState] = useState(initialState);
	const asideStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleSetStyle(state);
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setState(initialState);
		handleSetStyle(initialState);
	};
	const handleFontFamilyChange = (option: OptionType) => {
		setState({ ...state, fontFamilyOption: option });
	};
	const handleFontSizeChange = (option: OptionType) => {
		setState({ ...state, fontSizeOption: option });
	};
	const handleFontColorChange = (option: OptionType) => {
		setState({ ...state, fontColor: option });
	};
	const handleBackgroundColorChange = (option: OptionType) => {
		setState({ ...state, backgroundColor: option });
	};
	const handleContentWidthChange = (option: OptionType) => {
		setState({ ...state, contentWidth: option });
	};
	return (
		<>
			<ArrowButton onClick={handleOpen} isOpen={isOpen} />
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
						selected={state.fontFamilyOption}
						onChange={handleFontFamilyChange}
					/>
					<RadioGroup
						name='radio'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						onChange={handleFontSizeChange}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={state.fontColor}
						onChange={handleFontColorChange}
					/>
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={state.backgroundColor}
						onChange={handleBackgroundColorChange}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={state.contentWidth}
						onChange={handleContentWidthChange}
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
