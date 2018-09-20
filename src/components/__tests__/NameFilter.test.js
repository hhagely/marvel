import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import NameFilter from '../NameFilter';

test('filters on character when a filter letter is clicked', () => {
	const onFilter = jest.fn();

	const { getByTestId } = render(<NameFilter onFilter={onFilter} />);

	const filterA = getByTestId('filter-a');

	fireEvent.click(filterA);
	expect(onFilter).toHaveBeenCalled();
});
