import React, { Component } from 'react';

class ComicList extends Component {
	render() {
		return (
			<div>
				{this.props.characterId
					? `comics for char id: ${this.props.characterId}`
					: 'this is the comic list page'}
			</div>
		);
	}
}

export default ComicList;
