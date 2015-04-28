import React from 'react';
import { State, RouteHandler } from 'react-router';
import MangaAPIActions from '../actions/manga-api-actions';
import MangaIndexStore from '../stores/manga-index-store';
import MangaTitleStore from '../stores/manga-title-store';
import Symbiosis from '../mixins/symbiosis-mixin';
import Progress from '../views/progress';

export default React.createClass({
	mixins: [State, Symbiosis(MangaTitleStore)],
	componentWillMount() {
		let dep = MangaIndexStore.getState();
		if (dep.ready) {
			let params = this.getParams();
			MangaAPIActions.getManga(dep.all, params.alias);
		}
	},
	componentWillUpdate(nextProps, nextState) {
		if (nextState.run) {
			let params = this.getParams();
			let dep = MangaIndexStore.getState();
			MangaAPIActions.getManga.defer(dep.all, params.alias);
		}
	},
	render() {
		return <RouteHandler />;
	}
});