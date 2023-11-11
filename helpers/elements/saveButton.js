// Class
import Paths from '../classHelpers/paths';
const PATHS = new Paths();

function SaveButton() {
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
	};

	return (
		<>
			<button onClick={saveGame}>Sauvegarder</button>
		</>
	);
}

export default SaveButton;
