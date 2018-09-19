import React from 'react';
import App from '../App';
import { render } from 'react-testing-library';
import {
	createHistory,
	createMemorySource,
	LocationProvider
} from '@reach/router';

it('renders without crashing', () => {
	let testHistory = createHistory(createMemorySource('/'));
	const { debug } = render(
		<LocationProvider history={testHistory}>
			<App />
		</LocationProvider>
	);
	debug();
});
