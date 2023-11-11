// Librairie
import { useRouter } from 'next/router';

function Home() {
	// Variable
	const router = useRouter();

	// Méthode
	const loadGame = async () => {
		console.log('loading');
	};

	const startNewGame = async () => {
		const confirmation = prompt(
			'Veuillez écrire "continuer" pour commencer une nouvelle partie. Attention, toutes données de la précédente sauvegarde seront effacées, cette action est irréversible.'
		);
		if (confirmation === 'continuer') {
			console.log('new game');
		}
	};

	return (
		<main>
			<button onClick={loadGame}>Continuer</button>
			<button onClick={startNewGame}>Nouvelle partie</button>
		</main>
	);
}

export default Home;
