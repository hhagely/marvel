import React, { Component } from 'react';

class Character extends Component {
	state = {};
	render() {
		const { match } = this.props;
		return <div>character id: {match.params.characterId}</div>;
	}
}

export default Character;
