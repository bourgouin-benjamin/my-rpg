// Class
import Paths from '../classHelpers/paths';
const PATHS = new Paths();

// Librairie
import { useRouter } from 'next/router';

function SaveButton() {
	// Variable
	const router = useRouter();

	// Méthode
	const saveGame = async () => {
		const response = await fetch(PATHS.saveGame, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		});
		const message = await response.json();
		console.log(message);
		router.replace('/');
	};

	return (
		<>
			<button onClick={saveGame}>Sauvegarder et quitter</button>
		</>
	);
}

export default SaveButton;
