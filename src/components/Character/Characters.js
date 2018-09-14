import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharacterList from './CharacterList';
import Character from './Character';
import ComicList from '../Comic/ComicList';
import EventList from '../Event/EventList';

const Characters = () => (
	<Switch>
		<Route exact path="/characters" component={CharacterList} />
		<Route exact path="/characters/:characterId" component={Character} />
		<Route exact path="/characters/:characterId/comics" component={ComicList} />
		<Route exact path="/characters/:characterId/events" component={EventList} />
	</Switch>
);

export default Characters;
