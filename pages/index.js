// Librairie
import { useRouter } from 'next/router';
import SaveButton from '../helpers/elements/saveButton';

// Class
import Paths from '../helpers/classHelpers/paths';
const PATHS = new Paths();

function Home() {
	// Variable
	const router = useRouter();

	// Méthode
	const loadGame = async () => {
		const response = await fetch(PATHS.loadGame, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		});
		const message = await response.json();
		console.log(response.status);
	};

	const startNewGame = async () => {
		const confirmation = prompt(
			'Veuillez écrire "continuer" pour commencer une nouvelle partie. Attention, toutes données de la précédente sauvegarde seront effacées, cette action est irréversible.'
		);
		if (confirmation === 'continuer') {
			const deleteOldSave = await fetch(PATHS.startNewGame, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: '',
			});
			if (deleteOldSave.status === 200) {
				loadGame();
			}
		}
	};

	return (
		<main>
			<SaveButton />
			<button onClick={loadGame}>Continuer</button>
			<button onClick={startNewGame}>Nouvelle partie</button>
		</main>
	);
}

export default Home;
