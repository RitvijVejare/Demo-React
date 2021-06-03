import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Learn from './components/learn';
import Account from './components/account';
import Coach from './components/coach';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/learn" exact component={Learn} />
				<Route path="/account" exact component={Account} />
				<Route path="/coach" exact component={Coach} />
			</Switch>
		</Router>
	);
}

export default App;
