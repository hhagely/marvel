import React from 'react';
import App from '../App';
import { render, fireEvent } from 'react-testing-library';
import {
	createHistory,
	createMemorySource,
	LocationProvider
} from '@reach/router';
import 'jest-dom/extend-expect';

function renderWithRouter(
	ui,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		history
	};
}

test('renders without crashing', () => {
	const { container } = renderWithRouter(<App />);

	expect(container.innerHTML).toMatch('This is the home page');
});

test('navigates successfully to another page', () => {
	const {
		container,
		history: { navigate }
	} = renderWithRouter(<App />);

	navigate('/characters');

	expect(container.innerHTML).toMatch('Characters');
});
