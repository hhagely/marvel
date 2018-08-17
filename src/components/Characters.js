import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { List, Row, Col } from 'antd';
import NameFilter from './NameFilter';

class Characters extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nameStartsWith: null,
			limit: 20,
			offset: 0
		};
	}

	renderCharacters(characters, fetchMore) {
		const { limit } = this.state;

		return (
			<Row type="flex" justify="space-around">
				<Col span={3} />
				<Col span={18}>
					<List
						itemLayout="horizontal"
						pagination={{
							onChange: (page) => {
								fetchMore({
									variables: {
										offset: (page - 1) * limit,
										limit
									},
									updateQuery: (prev, { fetchMoreResult }) => {
										if (!fetchMoreResult) return prev;

										return fetchMoreResult;
									}
								});
							},
							pageSize: 20,
							pageSizeOptions: ['10', '20', '50', '100'],
							showSizeChanger: true,
							total: characters.data.total,
							onShowSizeChange: (current, size) => {
								this.setState({ limit: size });
							}
						}}
						grid={{ column: 4 }}
						dataSource={characters.data.results}
						renderItem={(item) => (
							<List.Item key={item.id}>
								<List.Item.Meta title={item.name} />
							</List.Item>
						)}
					/>
				</Col>
				<Col span={3} />
			</Row>
		);
	}

	getCharacters() {
		let { nameStartsWith, limit, offset } = this.state;

		return (
			<Query
				query={gql`
					query getChars($nameStartsWith: String, $limit: Int, $offset: Int) {
						getCharacters(
							nameStartsWith: $nameStartsWith
							limit: $limit
							offset: $offset
						) {
							code
							status
							copyright
							attributionText
							attributionHTML
							data {
								offset
								limit
								total
								count
								results {
									id
									name
									description
									modified
									resourceUri
									urls {
										type
										url
									}
									thumbnail {
										path
										extension
									}
									comics {
										items {
											name
										}
									}
									stories {
										items {
											name
										}
									}
									events {
										items {
											name
										}
									}
									series {
										items {
											name
										}
									}
								}
							}
						}
					}
				`}
				variables={{ nameStartsWith, limit, offset }}
			>
				{({ loading, error, data, fetchMore }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;

					return (
						<div>{this.renderCharacters(data.getCharacters, fetchMore)}</div>
					);
				}}
			</Query>
		);
	}

	render() {
		console.log('calling render');
		return (
			<div>
				<div>
					<NameFilter />
				</div>
				{this.getCharacters()}
			</div>
		);
	}
}

export default Characters;
