import fsPromises from 'fs/promises';
import path from 'path';

const DATA_TEMPORARY_SAVE_PATH = path.join(
	process.cwd(),
	'json/temporarySave.json'
);

export default async function handler(req, res) {
	// POST

	console.log(req.body);
	if (req.method === 'POST') {
		try {
			const temporarySaveData = await fsPromises.readFile(
				DATA_TEMPORARY_SAVE_PATH
			);
			const temporarySaveObjectData = JSON.parse(temporarySaveData);

			const { key, value } = req.body;
			temporarySaveObjectData[key] = value;

			const updatedTemporarySave = JSON.stringify(
				temporarySaveObjectData
			);
			await fsPromises.writeFile(
				DATA_TEMPORARY_SAVE_PATH,
				updatedTemporarySave
			);
			res.status(200).json({ message: 'Data saved successfully' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error storing data' });
		}
	}
}
