class Paths {
	constructor() {
		this.SAVE_GAME = '/api/saveGame';
		this.SAVE_DATA = '/api/saveData';
	}

	get saveGame() {
		return this.SAVE_GAME;
	}

	get saveData() {
		return this.SAVE_DATA;
	}
}

export default Paths;
