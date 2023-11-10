import fsPromises from 'fs/promises';
import path from 'path';

const DATA_FILE_PATH = path.join(process.cwd(), 'json/save.json');

export default async function handler(req, res) {
	// GET
	if (req.method === 'GET') {
		const jsonData = await fsPromises.readFile(DATA_FILE_PATH);
		const objectData = JSON.parse(jsonData);

		res.status(200).json(objectData);
	}

	// POST
	else if (req.method === 'POST') {
		try {
			const jsonData = await fsPromises.readFile(DATA_FILE_PATH);
			const objectData = JSON.parse(jsonData);

			const newData = req.body;

			objectData.push(newData);

			const updatedData = JSON.stringify(objectData);

			await fsPromises.writeFile(DATA_FILE_PATH, updatedData);

			res.status(200).json({ message: 'Data stored successfully' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error storing data' });
		}
	}
}
