import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../img/home/hero_img.png';
import Logo from '../img/header/logo.png';

const NotFound = () => {
	return (
		<section className='pb-10'>
			<div className='container mx-auto h-full relative'>
				{/* text and img wrapper */}
				<div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left md:pt-36 lg:pl-10 md:pr-10'>
					{/* text */}
					<div className='flex-1 pt-36 md:pt-0 md:w-auto flex flex-col justify-center items-center md:items-start'>
						<img
							src={Logo}
							alt='tartelux logo'
							className='h-48 lg:h-52 md:ml-3'
						/>
						<div className=' md:ml-16'>
							<h1 className=' text-brandPrimary text-4xl md:text-3xl lg:text-4xl mb-4'>
								Er ging iets mis
							</h1>
							<p className='mb-12 text-[22px] md:text-[18px] lg:text-[22px] text-accent'>
								Pagina niet gevonden
							</p>
							<Link className='btn btn-gradient' to='/'>
								Homepage
							</Link>
						</div>
					</div>
					{/* image */}
					<div className='hidden md:flex flex-1 h-[60vh] justify-center mt-5 items-center'>
						<img src={HeroImg} className='h-full' alt='Luca taart' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
