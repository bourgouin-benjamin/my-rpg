import fsPromises from 'fs/promises';
import path from 'path';

const DATA_SAVE_PATH = path.join(process.cwd(), 'json/save.json');
const DATA_TEMPORARY_SAVE_PATH = path.join(
	process.cwd(),
	'json/temporarySave.json'
);

export default async function handler(req, res) {
	// GET
	// if (req.method === 'GET') {
	// 	const jsonData = await fsPromises.readFile(DATA_FILE_PATH);
	// 	const objectData = JSON.parse(jsonData);

	// 	res.status(200).json(objectData);
	// }

	// UPDATE
	if (req.method === 'POST') {
		try {
			const temporarySaveData = await fsPromises.readFile(
				DATA_TEMPORARY_SAVE_PATH
			);
			const temporarySaveObjectData = JSON.parse(temporarySaveData);

			const newSave = JSON.stringify(temporarySaveObjectData);

			await fsPromises.writeFile(DATA_SAVE_PATH, newSave);

			res.status(200).json({ message: 'Data stored successfully' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error storing data' });
		}
	}
}
