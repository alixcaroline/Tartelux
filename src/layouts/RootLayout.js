import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
	return (
		<>
			<Header />
			<div className='max-w-[90vw] mx-auto'>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default RootLayout;
