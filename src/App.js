import React, { Component } from 'react';
// import axios from 'axios';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000/'
});

class App extends Component {
	componentDidMount() {}

	renderCharacters() {
		return (
			<Query
				query={gql`
					{
						getCharacters {
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
				`}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;

					console.log(data);
					return <div>Loaded! Check console for data</div>;
				}}
			</Query>
		);
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
					{this.renderCharacters()}
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
