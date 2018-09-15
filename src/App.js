import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './App.css';

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
						<Menu.Item key="home">
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item key="characters">
							<Link to="/characters">Characters</Link>
						</Menu.Item>
						<Menu.Item key="comics">
							<Link to="/comics">Comics</Link>
						</Menu.Item>
						<Menu.Item key="events">
							<Link to="/events">Events</Link>
						</Menu.Item>
						<Menu.Item key="about">
							<Link to="/about">About</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Content>
					<div>{this.props.children}</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<p>This is the footer</p>
				</Footer>
			</Layout>
		);
	}
}

export default App;
