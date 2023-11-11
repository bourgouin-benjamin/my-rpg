import fsPromises from 'fs/promises';
import path from 'path';

const DATA_SAVE_PATH = path.join(process.cwd(), 'json/save.json');
const DATA_TEMPORARY_SAVE_PATH = path.join(
	process.cwd(),
	'json/temporarySave.json'
);

export default async function handler(req, res) {
	// POST
	if (req.method === 'POST') {
		try {
			const saveData = await fsPromises.readFile(DATA_SAVE_PATH);
			const saveDataObject = JSON.parse(saveDataObject);
			const load = JSON.stringify(saveDataObject);
			await fsPromises.writeFile(DATA_TEMPORARY_SAVE_PATH, load);
			res.status(200).json({ message: 'Game load successfully' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error loading datas' });
		}
	}
}
