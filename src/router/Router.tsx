import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={'/*'}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
