import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const GET_CHARACTER_QUERY = gql`
	query getChar($characterId: Int) {
		getCharacter(characterId: $characterId) {
			code
			status
			copyright
			attributionText
			attributionHTML
			data {
				results {
					id
					name
					description
					modified
					resourceUri
					thumbnail {
						path
						extension
					}
					comics {
						items {
							resourceUri
							name
						}
					}
					events {
						items {
							resourceUri
							name
						}
					}
				}
			}
		}
	}
`;

class Character extends Component {
	getCharacter(characterId) {
		return (
			<Query query={GET_CHARACTER_QUERY} variables={{ characterId }}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error!</p>;
					// return <div>{JSON.stringify(data)}</div>;
					return (
						<div>
							{this.renderCharacterDetails(data.getCharacter.data.results[0])}
						</div>
					);
				}}
			</Query>
		);
	}

	renderCharacterDetails(characterData) {
		console.log(characterData);
	}

	render() {
		return (
			<div>
				<h1>Character Details</h1>
				{/* <div>character id: {this.props.characterId}</div> */}
				{this.getCharacter(this.props.characterId)}
			</div>
		);
	}
}

export default Character;
