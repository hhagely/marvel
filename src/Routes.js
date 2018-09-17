import Home from './components/Home';
import Comics from './components/Comic/Comics';
import Events from './components/Event/Events';
import About from './components/About';
import Character from './components/Character/Character';
import CharacterList from './components/Character/CharacterList';
import ComicList from './components/Comic/ComicList';
import EventList from './components/Event/EventList';

const routes = [
	{
		exact: true,
		path: '/',
		component: Home
	},
	{
		exact: true,
		path: '/characters',
		component: CharacterList,
		routes: [
			{
				exact: true,
				path: '/characters/:characterId',
				component: Character
			},
			{
				exact: true,
				path: '/characters/:characterId/comics',
				component: ComicList
			},
			{
				exact: true,
				path: '/characters/:characterId/events',
				component: EventList
			}
		]
	},
	{
		exact: false,
		path: '/comics',
		component: Comics
	},
	{
		exact: false,
		path: '/events',
		component: Events
	},
	{
		exact: false,
		path: '/about',
		component: About
	}
];

export default routes;

// export const routes = (
// 	<App>
// 		<Route exact path="/" component={Home} />
// 		<Route path="/characters" component={Characters} />
// 		<Route path="/comics" component={Comics} />
// 		<Route path="/events" component={Events} />
// 		<Route path="/about" component={About} />
// 	</App>
// );
