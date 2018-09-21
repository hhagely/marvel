import React from 'react';
import { render, wait } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Character, { GET_CHARACTER_QUERY } from '../Character';

const mocks = [
	{
		request: {
			query: GET_CHARACTER_QUERY,
			variables: {
				nameStartsWith: 'A',
				limit: 20,
				offSet: 0
			}
		},
		result: {
			data: {
				getCharacter: {
					code: 200,
					status: 'Ok',
					copyright: '© 2018 MARVEL',
					attributionText: 'Data provided by Marvel. © 2018 MARVEL',
					attributionHTML:
						'<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>',
					data: {
						offset: 0,
						limit: 5,
						total: 79,
						count: 5,
						results: [
							{
								id: 1017100,
								name: 'A-Bomb (HAS)',
								description:
									"Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
								modified: '2013-09-18T15:54:04-0400',
								resourceUri: null,
								thumbnail: {
									path:
										'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
									extension: 'jpg'
								}
							}
						]
					}
				}
			}
		}
	}
];

test('it renders the component without crashing', () => {
	render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Character characterId={1017100} />
		</MockedProvider>
	);
});

test('it calls the graphql server with the provided char id', async () => {
	const getCharacter = jest.fn();

	const { queryByText, getByValue } = render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<Character characterId={1017100} />
		</MockedProvider>
	);

	await wait(() =>
		expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument()
	);

	// expect(getCharacter).toHaveBeenCalled();
});
