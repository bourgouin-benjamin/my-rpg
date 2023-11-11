// Class
import Paths from '../../helpers/classHelpers/paths';
const PATHS = new Paths();

// Component
import SaveButton from '../../helpers/elements/saveButton';

function Game() {
	// Méthode
	// const fetchData = async () => {
	// 	const response = await fetch(PATHS.save);
	// 	const data = await response.json();
	// 	console.log('data', data);
	// };

	const saveData = async (datas) => {
		const requestBody = {
			key: Object.keys(datas)[0],
			value: Object.values(datas)[0],
		};

		const response = await fetch(PATHS.saveData, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		});
		const data = await response.json();
		console.log(data);
	};

	const onNameSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData(e.target);
		saveData(Object.fromEntries(formData));
	};

	return (
		<main>
			<SaveButton />
			<h1>Quel est votre nom, aventurier ?</h1>
			<form onSubmit={onNameSubmit}>
				<input
					type="text"
					name="adventurerName"
					id="adventurerName"
				/>
				<button type="submit">Valider</button>
			</form>
		</main>
	);
}

export default Game;
