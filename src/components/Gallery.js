import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleChevronLeft,
	faCircleChevronRight,
	faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

const Gallery = ({ galleryImages }) => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = (index) => {
		setSlideNumber(index);
		setOpenModal(true);
	};

	// Close Modal
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	// Previous Image
	const prevSlide = () => {
		slideNumber === 0
			? setSlideNumber(galleryImages.length - 1)
			: setSlideNumber(slideNumber - 1);
	};

	// Next Image
	const nextSlide = () => {
		slideNumber + 1 === galleryImages.length
			? setSlideNumber(0)
			: setSlideNumber(slideNumber + 1);
	};

	const btnStyles =
		'fixed cursor-pointer opacity-60 text-white z-40 hover:opacity-100 text-2xl';

	return (
		<>
			{openModal && (
				<div className='fixed top-0 right-0 bottom-0 left-0 z-30 bg-gray-900 bg-opacity-95 flex justify-center items-center'>
					<FontAwesomeIcon
						icon={faCircleXmark}
						className={`${btnStyles} top-10 right-10`}
						onClick={handleCloseModal}
					/>
					<FontAwesomeIcon
						icon={faCircleChevronLeft}
						className={`${btnStyles} left-10 `}
						onClick={prevSlide}
					/>
					<FontAwesomeIcon
						icon={faCircleChevronRight}
						className={`${btnStyles} right-10`}
						onClick={nextSlide}
					/>
					<div className='flex justify-center items-center w-[80%] h-[80%]'>
						<img
							src={galleryImages[slideNumber].img}
							alt='taart foto'
							className='rounded-md max-h-full max-w-full'
						/>
					</div>
				</div>
			)}
			<div className='columns-2 md:columns-3 lg:columns-4'>
				{galleryImages &&
					galleryImages.map((slide, index) => {
						return (
							<div
								className='relative mb-4 cursor-pointer'
								key={index}
								onClick={() => handleOpenModal(index)}>
								<img
									src={slide.img}
									alt=''
									className='w-full rounded-md border border-neutral-400 shadow-md'
								/>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default Gallery;
