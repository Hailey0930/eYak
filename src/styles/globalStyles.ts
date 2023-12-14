import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	:root {
		--font-size-100 : 2.5rem;
		--font-size-200 : 2.3rem;
		--font-size-300 : 2rem;
		--font-size-400 : 1.8rem;
		--font-size-500 : 1.6rem;

		--white-color-100: #fff;
        --white-color-200: #f4f4f4;
        --white-color-300: #f7f7f7;
        --white-color-400: #ddd;
        --white-color-500: #C0C0C0;
        --white-color-600: #b5b5b5;

		--primary-blue-color: #343496;
		--secondary-blue-color: #010163;
	}

	@font-face {
		font-family: 'Pretendard';
		src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'KCC-Ganpan';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}

    html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	html {
		font-family: "Pretendard";
        font-size: 62.5%;
		overflow-x: hidden;
	}
	img {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	button {
		background: transparent;
		border: none;
	}
`;
