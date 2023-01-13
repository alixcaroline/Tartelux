import React from 'react';

import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Socials = ({ color = 'accent', hoverColor = 'slate-400' }) => {
	const iconClasses = `text-${color} hover:text-${hoverColor} `;
	return (
		<ul className='flex gap-x-4'>
			<li className={iconClasses}>
				<a
					href='http://www.facebook.com/tartelux'
					target='_blank'
					rel='noreferrer'>
					<FaFacebookF />
				</a>
			</li>
			<li className={iconClasses}>
				<a
					href='https://www.instagram.com/tartelux'
					target='_blank'
					rel='noreferrer'>
					<FaInstagram />
				</a>
			</li>
			<li className={iconClasses}>
				<a
					href='http://www.pinterest.com/tartelux'
					target='_blank'
					rel='noreferrer'>
					<FaPinterestP />
				</a>
			</li>
		</ul>
	);
};

export default Socials;
