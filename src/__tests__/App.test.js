import React from 'react';
import App from '../App';
import { render, fireEvent } from 'react-testing-library';
import {
	createHistory,
	createMemorySource,
	LocationProvider
} from '@reach/router';
import 'jest-dom/extend-expect';

test('renders without crashing', () => {
	let testHistory = createHistory(createMemorySource('/'));
	const { debug } = render(
		<LocationProvider history={testHistory}>
			<App />
		</LocationProvider>
	);
});

test('changes selected menu item when clicked', () => {
	let testHistory = createHistory(createMemorySource('/'));

	const component = (
		<LocationProvider history={testHistory}>
			<App />
		</LocationProvider>
	);

	const { getByTestId } = render(component);

	const characterMenuItem = getByTestId('test-characters');

	expect(getByTestId('test-home')).toHaveClass('ant-menu-item-selected');

	fireEvent.click(characterMenuItem);

	expect(getByTestId('test-characters')).toHaveClass('ant-menu-item-selected');
});
