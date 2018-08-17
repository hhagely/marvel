import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

// import logo from './logo.svg';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentKey: 'characters'
		};
	}

	render() {
		return (
			<div className="App">
				<Layout className="layout">
					<Header>
						{/* <h1>Marvel Graphql</h1> */}
						<Menu
							mode="horizontal"
							selectedKeys={[this.state.currentKey]}
							onClick={(e) => this.setState({ currentKey: e.key })}
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
						{/* <img src={logo} className="App-logo" alt="logo" />
							<h1 className="App-title">Welcome to React</h1> */}
					</Header>
					<Content>
						<div>{this.props.children}</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						<p>This is the footer</p>
					</Footer>
				</Layout>
				{/* <header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header> */}

				{/* <p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
						<Button type="primary">Button</Button>
					</p>
					{this.renderCharacters()} */}
			</div>
		);
	}
}

export default App;
