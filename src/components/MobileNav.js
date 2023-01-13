import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import { CgMenuCake } from 'react-icons/cg';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Socials from './Socials';

const menuVariants = {
	hidden: {
		x: '100%',
	},
	show: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
		},
	},
};

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className='md:hidden'>
			{/* open nav button */}
			<div
				className='text-3xl cursor-pointer text-slate-500'
				onClick={() => setOpenMenu(true)}>
				<CgMenuCake />
			</div>
			{/* menu */}
			<motion.div
				variants={menuVariants}
				initial='hidden'
				animate={openMenu ? 'show' : ''}
				className='bg-brandPrimaryDark w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
				<div
					className='text-4xl absolute hover:text-slate-900 text-slate-800 top-16 right-14 cursor-pointer z-30'
					onClick={() => setOpenMenu(false)}>
					<IoMdClose />
				</div>
				<ul className='h-full flex flex-col justify-center items-center gap-y-6 text-slate-800 font-primary text-2xl'>
					<li
						className='hover:text-slate-900'
						onClick={() => setOpenMenu(false)}>
						<Link to={'/'}>Home</Link>
					</li>
					<li
						className='hover:text-slate-900'
						onClick={() => setOpenMenu(false)}>
						<Link to='/taarten'>Taarten</Link>
					</li>
					<li
						className='hover:text-slate-900'
						onClick={() => setOpenMenu(false)}>
						<Link to='/contact'>Contact</Link>
					</li>
					<div className='mt-12 text-sm'>
						<Socials color='slate-800' hoverColor='slate-900' />
					</div>
				</ul>
			</motion.div>
		</nav>
	);
};

export default MobileNav;
