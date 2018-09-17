import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Character extends Component {
	render() {
		const { match } = this.props;
		console.log('character page props: ', JSON.stringify(this.props));
		return (
			<div>
				<div>
					<Route exact path="/characters/:characterId" component={Character} />
				</div>
				character id: {match.params.characterId}
			</div>
		);
	}
}

export default Character;
