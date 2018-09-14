import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EventList from './EventList';
import Event from './Event';

const Events = () => (
	<Switch>
		<Route exact path="/events" component={EventList} />
		<Route exact path="/events/:eventId" component={Event} />
	</Switch>
);

export default Events;
