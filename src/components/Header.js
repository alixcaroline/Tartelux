import React from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	const { pathname } = location;
	const normalLink = 'hover:text-slate-400 transition';
	const activeLink = `${normalLink} text-brandPrimary`;

	return (
		<header className='fixed w-full px-[60px] z-30 h-[150px] flex items-center bg-slate-900'>
			<div className='flex flex-col md:flex-row md:items-center w-full justify-between max-w-[95%]'>
				{/* don't show logo on homepage */}
				{location.pathname === '/' ? (
					<div className='max-w-[200px]  pt-2'></div>
				) : (
					<Link to={'/'} className='max-w-[200px]  pt-2'>
						<img src={Logo} alt='tartelux logo' />
					</Link>
				)}
				{/* Nav for desktop */}
				<nav className='hidden md:flex md:gap-x-4 lg:gap-x-8 mt-12'>
					<Link to='/' className={pathname === '/' ? activeLink : normalLink}>
						Home
					</Link>
					<Link
						to='/taarten'
						className={pathname === '/taarten' ? activeLink : normalLink}>
						Taarten
					</Link>
					<Link
						to='/contact'
						className={pathname === '/contact' ? activeLink : normalLink}>
						Contact
					</Link>
				</nav>
			</div>
			{/* Socials */}
			<div className='hidden md:flex md:ml-10 lg:ml-16 mt-12'>
				<Socials />
			</div>
			{/* Nav for mobile */}
			<MobileNav />
		</header>
	);
};

export default Header;
