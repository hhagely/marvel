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
			// <div>
			<Row gutter={16} type="flex" justify="space-around">
				<Col />
				<Col>
					{alphabet.map((letter) => {
						if (letter === 'z') {
							return (
								<a
									data-testid={`filter-${letter}`}
									key={letter}
									onClick={(e) => this.props.onFilter(e.target.text)}
									style={{ fontSize: 24 }}
								>
									{letter.toUpperCase()}
								</a>
							);
						}

						return (
							<div style={{ float: 'left' }} key={letter}>
								<a
									data-testid={`filter-${letter}`}
									onClick={(e) => this.props.onFilter(e.target.text)}
									style={{ fontSize: 24 }}
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
			// </div>
		);
	}
}

export default NameFilter;
