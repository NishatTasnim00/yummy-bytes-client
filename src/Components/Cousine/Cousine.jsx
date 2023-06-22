import React from 'react';
import './CUisine.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Cousine = () => {
	return (
		<div className="my-container lg:flex gap-8">
			<div className="lg:w-1/2 grid grid-cols-2 gap-3 mb-5">
				<figure className="relative h-40 w-40 lg:h-72 lg:w-64 overflow-hidden hover:scale-100">
					<LazyLoadImage
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
						src="https://i.ibb.co/KjyyZLH/humphrey-muleba-j-ABXu-TS1azc-unsplash.jpg"
						alt=""
					/>
				</figure>
				<figure className="relative h-40 w-40 lg:h-72 lg:w-64  overflow-hidden hover:scale-100">
					<LazyLoadImage
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
						src="https://i.ibb.co/g4bCD6q/Creme-Brulee.jpg"
						alt=""
					/>
				</figure>
				<figure className="relative h-40 w-40 lg:h-72 lg:w-64  overflow-hidden hover:scale-100">
					<LazyLoadImage
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
						src="https://i.ibb.co/nmg5nL7/Beef-and-Mushroom-Pies-2-700x748.jpg"
						alt=""
					/>
				</figure>
				<figure className="relative h-40 w-40 lg:h-72 lg:w-64  overflow-hidden hover:scale-100">
					<LazyLoadImage
						className="absolute object-cover  h-40 w-40 lg:h-72 lg:w-64 hover:scale-125"
						src="https://i.ibb.co/Tq7dMmb/Cumin-Lamb-Stir-Fry-1.jpg"
						alt=""
					/>
				</figure>
			</div>

			<div className="lg:w-1/2 lg:pl-10">
				<h1 className="title-2 pb-8"> An Overview of Australian Cuisine</h1>
				<p className="text-base">
					Australian cuisine is a rich blend of different cultural influences,
					reflecting the country's diverse history and geography. Its cuisine
					has been influenced by European, Asian, Pacific Islander, and
					Indigenous traditions. Barbecue is an essential part of Australian
					food culture, with grilled meats, seafood, and vegetables served with
					salads and sauces. Seafood is also abundant, with fresh fish, oysters,
					and prawns being popular menu items. Meat pies and Vegemite are
					quintessential Australian snacks, while Lamingtons are a classic
					dessert. Indigenous cuisine is also a vital part of Australian food
					culture, featuring unique dishes like kangaroo and emu meat, and
					native fruits and vegetables like finger limes and wattleseed. Coffee
					culture is also strong in Australia, with cafes serving up top-quality
					espresso-based drinks. Overall, Australian cuisine is a diverse and
					flavorful mix of different cultural traditions that has evolved over
					time to become a unique and distinctive food culture.
				</p>
			</div>
		</div>
	);
};

export default Cousine;
