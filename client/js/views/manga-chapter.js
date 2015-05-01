import React from 'react';
import { State } from 'react-router';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaUIActions from '../actions/manga-ui-actions';
import MangaTitleStore from '../stores/manga-title-store';
import MangaChapterStore from '../stores/manga-chapter-store';
import Symbiosis from '../mixins/symbiosis-mixin';
import DOMEvent from '../mixins/dom-event-mixin';
import Progress from '../views/progress';
import Process from '../constants/process-constants';

const keys = {
	end: 35,
	home: 36,
	left: 37,
	right: 39
};

export default React.createClass({
	mixins: [State, Symbiosis(MangaChapterStore), DOMEvent($(document.body), 'keydown', 'handleKey')],
	componentWillMount() {
		MangaUIActions.toChapter();
		let dep = MangaTitleStore.getState();
		if (dep.process == Process.Done) {
			let params = this.getParams();
			MangaAPIActions.getChapter(dep.manga, params.chapter);
		}
	},
	handleKey(e) {
		switch (e.which) {
			case keys.left:
				MangaUIActions.readPreviousPage();
				document.body.scrollTop = 0;
				break;
			case keys.right:
				MangaUIActions.readNextPage();
				document.body.scrollTop = 0;
				break;
			case keys.home:
				e.preventDefault();
				MangaUIActions.readFirstPage();
				document.body.scrollTop = 0;
				break;
			case keys.end:
				e.preventDefault();
				MangaUIActions.readLastPage();
				document.body.scrollTop = 0;
				break;
			default:
				break;
		}
	},
	componentWillUpdate(nextProps, nextState) {
		if (nextState.process == Process.Ready) {
			let params = this.getParams();
			let dep = MangaTitleStore.getState();
			MangaAPIActions.getChapter.defer(dep.manga, params.chapter);
		}
	},
	render() {
		let page;
		if (this.state.process == Process.Done) {
			page = <img style={{ width: '60vw' }} src={`https://cdn.mangaeden.com/mangasimg/${this.state.pages[this.state.pages.length - this.state.page - 1][1]}`} />;
		}
		return (
			<div className='teal-text'>
				<Progress loading={Process.Loading(this.state.process)} />
				<h2 className='grey-text text-darken-3'>Page {this.state.page}</h2>
				<div className='center-align'>
					{page}
				</div>
			</div>
		);
	}
});
