// Librairie
import Head from 'next/head';

// Composants
//

function MyRpg({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyRpg;
