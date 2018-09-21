import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import { Layout, Menu } from 'antd';

import './App.css';
import Home from './components/Home';
import Character from './components/Character/Character';
import CharacterList from './components/Character/CharacterList';
import ComicList from './components/Comic/ComicList';
import EventList from './components/Event/EventList';
import About from './components/About';
import Comic from './components/Comic/Comic';
import Event from './components/Event/Event';

const { Header, Content, Footer } = Layout;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentKey: 'home'
		};
	}

	render() {
		return (
			<Layout className="layout">
				<Header style={{ padding: 0 }}>
					<Menu
						mode="horizontal"
						theme="dark"
						selectedKeys={[this.state.currentKey]}
						onClick={(e) => this.setState({ currentKey: e.key })}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="home" data-testid={`test-home`}>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item key="characters" data-testid={`test-characters`}>
							<Link to="/characters">Characters</Link>
						</Menu.Item>
						<Menu.Item key="comics" data-testid={`test-comics`}>
							<Link to="/comics">Comics</Link>
						</Menu.Item>
						<Menu.Item key="events" data-testid={`test-events`}>
							<Link to="/events">Events</Link>
						</Menu.Item>
						<Menu.Item key="about" data-testid={`test-about`}>
							<Link to="/about">About</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content>
					<Router>
						<Home path="/" default />
						<CharacterList path="characters" />
						<Character path="/characters/:characterId" />
						<ComicList path="/characters/:characterId/comics" />
						<EventList path="/characters/:characterId/events" />
						<ComicList path="comics" />
						<Comic path="/comics/:comicId" />
						<CharacterList path="/comics/:comicId/characters" />
						<Event path="/comics/:comicId/event" />
						<EventList path="events" />
						<CharacterList path="/events/:eventId/characters" />
						<ComicList path="/events/:eventId/comics" />
						<About path="about" />
					</Router>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<p>This is the footer</p>
				</Footer>
			</Layout>
		);
	}
}

export default App;
