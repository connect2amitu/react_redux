import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/home/Home';
import User from './views/User/User';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/user" component={User} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
