import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import { routes } from './Routes';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
	uri: 'http://localhost:4000/'
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router children={routes} />
	</ApolloProvider>,
	document.getElementById('root')
);

registerServiceWorker();
