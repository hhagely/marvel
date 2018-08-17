import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';

class NameFilter extends Component {
	constructor(props) {
		super(props);

		this.state = { currentFilter: '' };
	}

	render() {
		const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz'.split(''));

		return (
			<div>
				<Row gutter={16} type="flex" justify="space-around">
					<Col />
					<Col>
						{alphabet.map((letter) => {
							if (letter === 'z') {
								return (
									<a key={letter} onClick={(e) => console.log(e)}>
										{letter.toUpperCase()}
									</a>
								);
							}

							return (
								<div style={{ float: 'left' }} key={letter}>
									<a
										onClick={(e) => {
											console.log(e);
											this.setState({ currentFilter: e.target.text });
										}}
									>
										{letter.toUpperCase()}
									</a>
									<Divider type="vertical" />
								</div>
							);
						})}
					</Col>
					<Col />
				</Row>
			</div>
		);
	}
}

export default NameFilter;
