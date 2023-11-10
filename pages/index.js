// Librairie
import { useRouter } from 'next/router';

// Component
import Paths from '../helpers/saveRoots';

const PATHS = new Paths();

function Home() {
	// Variable
	const router = useRouter();

	// Méthode
	// const fetchData = async () => {
	// 	const response = await fetch(PATHS.save);
	// 	const data = await response.json();
	// 	console.log('data', data);
	// };

	const saveGame = async () => {
		const response = await fetch(PATHS.saveGame, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		});
		const data = await response.json();
		console.log(data);
	};

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
			<h1>Quel est votre nom, aventurier ?</h1>
			<form onSubmit={onNameSubmit}>
				<input
					type="text"
					name="adventurerName"
					id="adventurerName"
				/>
				<button type="submit">Valider</button>
			</form>
			<button onClick={saveGame}>Sauvegarder la partie</button>
		</main>
	);
}

export default Home;
