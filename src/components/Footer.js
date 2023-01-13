import React from 'react';
import Socials from './Socials';

const Footer = () => {
	return (
		<footer className='h-20 flex flex-col gap-y-3 justify-center items-center'>
			<Socials color='slate-500' hoverColor='slate-700' />
			<p className='text-slate-600 flex items-center'>
				&copy;<span className='text-xs pl-1'> Tartelux | 2023</span>{' '}
			</p>
		</footer>
	);
};

export default Footer;
