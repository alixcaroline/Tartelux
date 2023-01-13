import React from 'react';

import {
	createHashRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Taarten from './pages/Taarten';
import Contact from './pages/Contact';
import RootLayout from './layouts/RootLayout';
import NotFound from './pages/NotFound';

const router = createHashRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='taarten' element={<Taarten />} />
			<Route path='contact' element={<Contact />} />
			<Route path='*' element={<NotFound />} />
		</Route>,
	),
);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
