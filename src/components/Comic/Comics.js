import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ComicList from './ComicList';
import Comic from './Comic';

const Comics = () => (
	<Switch>
		<Route exact path="/comics" component={ComicList} />
		<Route path="/characters/:characterId/Comics" component={ComicList} />
		<Route path="/comics/:comicId" component={Comic} />
	</Switch>
);

export default Comics;
