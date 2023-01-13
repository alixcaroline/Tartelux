import React from 'react';
import ContactForm from '../components/ContactForm';

import Taart from '../img/contact/frozen_taart.png';

const Contact = () => {
	return (
		<section>
			<div className='container mx-auto h-full'>
				<div className='flex flex-col md:flex-row h-full items-center md:items-start justify-start pt-36 gap-x-8 text-center md:text-left'>
					{/* form */}
					<div className='md:flex-1 md:pt-16'>
						<ContactForm />
					</div>
					{/* image */}
					<div className='hidden md:flex flex-1 h-[60vh] justify-center mt-4 items-center'>
						<img src={Taart} alt='frozen taart' className='h-full' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
