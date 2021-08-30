import './App.css';

import Router from '@router';
import React from 'react';

import logo from './logo.svg';

const App = () => {
	return (
		<main>
			<Router />
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						# 🔥🚀⚡{' '}
						<a
							className="App-link"
							href="https://vitejs.dev/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Vite
						</a>
						{' + '}
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							React
						</a>
						{' + '}
						<a
							className="App-link"
							href="https://redux-toolkit.js.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Redux(@reduxjs/toolkit)
						</a>
						{' + '}
						<a
							className="App-link"
							href="https://www.typescriptlang.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Typescript
						</a>
					</p>
					<p>Start your awesome project</p>
				</header>
			</div>
		</main>
	);
};

export default App;
