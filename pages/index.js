// Librairie
import { useRouter } from 'next/router';

// Component
import Roots from '../helpers/saveRoots';

const ROOTS = new Roots();

function Home() {
	// Variable
	const router = useRouter();

	// Méthode
	const fetchData = async () => {
		const response = await fetch(ROOTS.save);
		const data = await response.json();
		console.log('data', data);
	};

	const saveData = async () => {
		const response = await fetch(ROOTS.save, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: 'pepito',
				email: 'pepito@pepito.com',
			}),
		});
		const data = await response.json();
		console.log(data);
	};

	const onNameSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<main>
			<h1>Quel est votre nom, aventurier ?</h1>
			<form onSubmit={onNameSubmit}>
				<input type="text" name="name" id="name" />
				<button type="submit" onClick={fetchData}>
					Valider
				</button>
			</form>
			<button onClick={saveData}>Test ajout datas</button>
		</main>
	);
}

export default Home;
