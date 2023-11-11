// Librairie
import { useRouter } from 'next/router';
import SaveButton from '../helpers/elements/saveButton';

// Class
import Paths from '../helpers/classHelpers/paths';
const PATHS = new Paths();

export default function Home(props) {
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
		console.log(message);
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
			{'gameStep' in props.gameData ? (
				<button onClick={loadGame}>Continuer</button>
			) : (
				''
			)}

			<button onClick={startNewGame}>Nouvelle partie</button>
		</main>
	);
}

export async function getServerSideProps() {
	const response = await fetch(process.env.URL + PATHS.loadGame, {
		method: 'GET',
	});
	const gameData = await response.json();

	return {
		props: {
			gameData: JSON.parse(JSON.stringify(gameData)),
		},
	};
}
