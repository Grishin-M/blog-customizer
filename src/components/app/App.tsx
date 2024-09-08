import { CSSProperties, useState } from 'react';
import { Article } from '../../components/article/Article';
import { ArticleParamsForm } from '../../components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [stylesState, setStylesState] = useState(defaultArticleState);

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': stylesState.fontFamilyOption.value,
					'--font-size': stylesState.fontSizeOption.value,
					'--font-color': stylesState.fontColor.value,
					'--container-width': stylesState.contentWidth.value,
					'--bg-color': stylesState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm handleSetStyle={setStylesState} />
			<Article />
		</div>
	);
};
