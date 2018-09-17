import React, { Component } from 'react';

class EventList extends Component {
	render() {
		return (
			<div>
				{this.props.characterId
					? `events for char id: ${this.props.characterId}`
					: 'this is the event list page'}
			</div>
		);
	}
}

export default EventList;
