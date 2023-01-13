import React from 'react';

import Gallery from '../components/Gallery';

// Import all images from specific folder and create an object
const importAll = (r) => {
	let images = {};
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
};

const imagesObj = importAll(
	require.context('../img/taarten', false, /\.(png|jpe?g|svg)$/),
);

//convert imagesObject to an Array
const imgArray = Object.values(imagesObj);

const createGalleryImages = (images) => {
	const newArray = [];
	images.map((img) => newArray.push({ img: img }));
	return newArray;
};
const Taarten = () => {
	return (
		<section>
			<div className='container mx-auto h-full relative pt-12 lg:pt-0'>
				<div className='flex flex-col h-full items-center justify-start gap-x-24 text-center lg:items-start lg:text-left pt-24 lg:pt-36 pb-8'>
					<div className='flex flex-col lg:items-start'>
						<p className='mb-6 mt-10 text-brandPrimary text-xl xl:text-2xl'></p>
					</div>
					{/* Gallery */}
					<Gallery galleryImages={createGalleryImages(imgArray)} />
				</div>
			</div>
		</section>
	);
};

export default Taarten;
