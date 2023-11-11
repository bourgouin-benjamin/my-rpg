import fsPromises from 'fs/promises';
import path from 'path';

const DATA_SAVE_PATH = path.join(process.cwd(), 'json/save.json');

export default async function handler(req, res) {
	// POST
	if (req.method === 'POST') {
		try {
			const reset = {};
			await fsPromises.writeFile(
				DATA_SAVE_PATH,
				JSON.stringify(reset)
			);
			res.status(200).json({
				message: 'Save deleted successfully, starting new game',
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Error starting new game' });
		}
	}
}
