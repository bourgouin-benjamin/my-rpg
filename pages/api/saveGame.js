import fsPromises from 'fs/promises';
import path from 'path';

const DATA_SAVE_PATH = path.join(process.cwd(), 'json/save.json');
const DATA_TEMPORARY_SAVE_PATH = path.join(
	process.cwd(),
	'json/temporarySave.json'
);

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const temporarySaveData = await fsPromises.readFile(
				DATA_TEMPORARY_SAVE_PATH
			);
			const temporarySaveObjectData = JSON.parse(temporarySaveData);
			const newSave = JSON.stringify(temporarySaveObjectData);
			await fsPromises.writeFile(DATA_SAVE_PATH, newSave);

			const reset = {};
			await fsPromises.writeFile(
				DATA_TEMPORARY_SAVE_PATH,
				JSON.stringify(reset)
			);

			res.status(200).json({ message: 'Game saved successfull' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error saving the game' });
		}
	}
}
