import React, { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef();
	const [emailConfirmation, setEmailConfirmation] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAIL_SERVICE,
				process.env.REACT_APP_EMAIL_TEMPLATE,
				form.current,
				process.env.REACT_APP_EMAIL_KEY,
			)
			.then(
				(result) => {
					setEmailConfirmation(true);
				},
				(error) => {
					console.log(error.text);
				},
			);
		e.target.reset();
	};

	return (
		<>
			{emailConfirmation && (
				<>
					<p className='mt-32 text-brandPrimary text-2xl'>
						Bedankt voor uw bericht.
					</p>
					<p className=' text-accent mt-5'>
						Volg Tartelux zeker ook op <br />
						<a
							href='http://www.facebook.com/tartelux'
							target='_blank'
							rel='noreferrer'
							className='text-slate-400 hover:text-brandPrimary'>
							Facebook
						</a>
						&nbsp; en &nbsp;
						<a
							href='https://www.instagram.com/tartelux'
							target='_blank'
							rel='noreferrer'
							className='text-slate-400 hover:text-brandPrimary'>
							Instagram
						</a>
					</p>
				</>
			)}

			{/* form */}
			{!emailConfirmation && (
				<>
					<p className=' mt-8 mb-6 text-brandPrimary text-xl md:text-[17px] lg:text-xl'>
						Heeft u een suggestie of een vraag?
					</p>
					<form
						ref={form}
						onSubmit={sendEmail}
						className='flex flex-col gap-y-4'>
						<div className='flex gap-x-10'>
							<input
								name='name'
								className='outline-none border-b border-b-slate-300 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-slate-300'
								type='text'
								placeholder='Uw naam'
								required
							/>
							<input
								name='email'
								className='outline-none border-b border-b-slate-300 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-slate-300'
								type='email'
								placeholder='Uw e-mail'
								required
							/>
						</div>
						<TextareaAutosize
							name='message'
							minRows={2}
							className='mt-10 outline-none border-b border-b-slate-300 h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-slate-300'
							placeholder='Uw bericht'
							required
						/>
						<button className='btn btn-gradient mt-5 mb-[30px] mx-auto md:mx-0 self-start'>
							Versturen
						</button>
					</form>
				</>
			)}
		</>
	);
};

export default ContactForm;
