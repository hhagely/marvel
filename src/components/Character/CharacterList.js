import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { List, Row, Col, Card, Icon } from 'antd';

import NameFilter from '../NameFilter';

export const GET_CHARACTERS_QUERY = gql`
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
					thumbnail {
						path
						extension
					}
				}
			}
		}
	}
`;

export default class CharacterList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nameStartsWith: null,
			limit: 20,
			offset: 0,
			loading: false
		};
	}

	handleRefetch(filter, refetchFunction) {
		this.setState({ nameStartsWith: filter });
		refetchFunction({ nameStartsWith: filter });
	}

	renderCharacters(characters, fetchMore) {
		const { limit, nameStartsWith } = this.state;

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
										limit,
										nameStartsWith
									},
									updateQuery: (prev, { fetchMoreResult }) => {
										if (!fetchMoreResult) return prev;

										return fetchMoreResult;
									}
								});
							},
							pageSize: this.state.limit,
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
								<Card
									style={{ textAlign: 'center' }}
									loading={this.state.loading}
									cover={
										<img
											alt={item.name}
											src={`${item.thumbnail.path}/portrait_fantastic.${
												item.thumbnail.extension
											}`}
										/>
									}
									actions={[
										<Link to={`/characters/${item.id}/comics`}>
											<Icon type="file-text" theme="twoTone" />
										</Link>,
										<Link to={`/characters/${item.id}/events`}>
											<Icon type="exclamation-circle" theme="twoTone" />
										</Link>,
										<Link to={`/characters/${item.id}`}>
											<Icon type="info-circle" theme="twoTone" />
										</Link>
									]}
									title={item.name}
								/>
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
				query={GET_CHARACTERS_QUERY}
				variables={{ nameStartsWith, limit, offset }}
			>
				{({ loading, error, data, refetch, fetchMore }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;

					let nameFilter = {
						paddingTop: 20,
						paddingBottom: 20
					};

					return (
						<div>
							<div style={nameFilter}>
								<NameFilter
									onFilter={(filter) => this.handleRefetch(filter, refetch)}
								/>
							</div>
							{this.renderCharacters(data.getCharacters, fetchMore)}
						</div>
					);
				}}
			</Query>
		);
	}

	render() {
		return <div>{this.getCharacters()}</div>;
	}
}

// export default CharacterList;
