import * as React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Characters from './components/Character/Characters';
import Comics from './components/Comic/Comics';
import Events from './components/Event/Events';
import About from './components/About';

// TODO: add all components to this file, both landscape and portrait
export const routes = (
	<App>
		<Route exact path="/" component={Home} />
		<Route path="/characters" component={Characters} />
		<Route path="/comics" component={Comics} />
		<Route path="/events" component={Events} />
		<Route path="/about" component={About} />
	</App>
);
