class Paths {
	constructor() {
		this.SAVE_GAME = '/api/saveGame';
		this.SAVE_DATA = '/api/saveData';
		this.LOAD_GAME = '/api/loadGame';
		this.START_NEW_GAME = '/api/startNewGame';
	}

	get saveGame() {
		return this.SAVE_GAME;
	}

	get saveData() {
		return this.SAVE_DATA;
	}

	get loadGame() {
		return this.LOAD_GAME;
	}

	get startNewGame() {
		return this.START_NEW_GAME;
	}
}

export default Paths;
