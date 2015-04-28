import alt from '../alt';
import MangaAPIActions from '../actions/manga-api-actions';

class MangaChapterStore {
	constructor() {
		this.bindActions(MangaAPIActions);

		this.page = 0;
		this.pages = [];

		this.loading = false;
		this.ready = false;
		this.run = false;
	}
	getAllManga() {
		this.loading = true;
	}
	getManga() {
		this.loading = true;
	}
	getMangaComplete() {
		this.run = true;
	}
	getChapter() {
		this.loading = true;
		this.run = false;
	}
	getChapterComplete(pages) {
		this.pages = pages;
	
		this.loading = false;
		this.ready = true;
	}
}

export default alt.createStore(MangaChapterStore, 'MangaChapterStore');
