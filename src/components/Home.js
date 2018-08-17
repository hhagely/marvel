import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
	render() {
		return (
			<div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
					<Button type="primary">Button</Button>
				</p>
				{/* {this.renderCharacters()} */}
			</div>
		);
	}
}

export default Home;
