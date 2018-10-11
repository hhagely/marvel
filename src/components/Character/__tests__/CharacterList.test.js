import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';

import { render, waitForElement, wait } from 'react-testing-library';

import CharacterList, { GET_CHARACTERS_QUERY } from '../CharacterList';

const mocks = [
	{
		request: {
			query: GET_CHARACTERS_QUERY,
			variables: {
				nameStartsWith: 'A',
				limit: 5,
				offSet: 0
			}
		},
		result: {
			data: {
				getCharacters: {
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
							},
							{
								id: 1009144,
								name: 'A.I.M.',
								description:
									'AIM is a terrorist organization bent on destroying the world.',
								modified: '2013-10-17T14:41:30-0400',
								resourceUri: null,
								thumbnail: {
									path:
										'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
									extension: 'jpg'
								}
							},
							{
								id: 1010699,
								name: 'Aaron Stack',
								description: '',
								modified: '1969-12-31T19:00:00-0500',
								resourceUri: null,
								thumbnail: {
									path:
										'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
									extension: 'jpg'
								}
							},
							{
								id: 1009146,
								name: 'Abomination (Emil Blonsky)',
								description:
									'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
								modified: '2012-03-20T12:32:12-0400',
								resourceUri: null,
								thumbnail: {
									path:
										'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
									extension: 'jpg'
								}
							},
							{
								id: 1016823,
								name: 'Abomination (Ultimate)',
								description: '',
								modified: '2012-07-10T19:11:52-0400',
								resourceUri: null,
								thumbnail: {
									path:
										'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
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

test('renders the component', () => {
	const { debug } = render(
		<MockedProvider mocks={mocks} addTypename={false}>
			<CharacterList />
		</MockedProvider>
	);
});

// test('calls fetchmore when page number is clicked', async () => {
// 	// const fetchMore = jest.fn();
// 	// const renderCharacters = jest.fn();

// 	const { getByTitle, debug, getByTestId } = render(
// 		<MockedProvider mocks={mocks} addTypename={false}>
// 			<CharacterList nameStartsWith="A" limit={5} offSet={0} />
// 		</MockedProvider>
// 	);

// 	// await wait(() => expect(getByTestId('character-list')).toBeInTheDocument());

// 	const characterList = await waitForElement(() => {
// 		getByTestId('character-list');
// 	});

// 	console.log(characterList);

// 	// debug();

// 	// await wait(() => expect(renderCharacters.mock.calls.length).toBe(1));

// 	// const paginationElement = await waitForElement(() => getByTitle('2'));

// 	// console.log(paginationElement);
// });
