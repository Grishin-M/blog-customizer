import { CSSProperties, useState } from 'react';
import { Article } from '../../components/article/Article';
import { ArticleParamsForm } from '../../components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from '../../constants/articleProps';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const changeStyles = (styles: ArticleStateType) => {
		return {
			'--font-family': styles.fontFamilyOption.value,
			'--font-size': styles.fontSizeOption.value,
			'--font-color': styles.fontColor.value,
			'--container-width': styles.contentWidth.value,
			'--bg-color': styles.backgroundColor.value,
		};
	};

	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState(changeStyles(defaultArticleState));

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleSetStyle = (styles: ArticleStateType) => {
		setState(changeStyles(styles));
	};

	return (
		<div className={styles.main} style={state as CSSProperties}>
			<ArticleParamsForm
				isOpen={isOpen}
				handleSetStyle={handleSetStyle}
				handleOpen={handleOpen}
			/>
			<Article />
		</div>
	);
};
