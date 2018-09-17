import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
	console.log('top level route: ', route);
	return (
		<Route
			exact={route.exact}
			path={route.path}
			render={(props) => {
				console.log('route with sub routes props: ', props);
				return <route.component {...props} routes={route.routes} />;
			}}
		/>
	);
};

export default RouteWithSubRoutes;
