// Librairie
import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
	return (
		<Html>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="author" content="Benjamin Bourgouin" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
