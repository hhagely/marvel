import React, { Component } from 'react';

class ComicList extends Component {
	render() {
		const { match } = this.props;
		if (match.params.characterId)
			console.log(
				'this page should show the comics for char id: ',
				match.params.characterId
			);
		else console.log('no character id provided');
		return <div>Comic list Page</div>;
	}
}

export default ComicList;
