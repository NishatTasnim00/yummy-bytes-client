import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({chefData}) => {
    // console.log(chefData);
    const {id, chefName, yearsOfExperience, chefPicture, likes, recipes
} = chefData;
    return (
			<div className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl pt-5">
				<figure className="relative h-60 w-full lg:h-[270px] lg:w-full self-center rounded-lg">
					{/* <img
						className=" absolute object-cover"
						src={chefPicture}
						alt="chef"
						effect="blur"
					/> */}

					<div>
						<LazyLoadImage
							effect="blur"
							delayTime="100000"
							
							height={270}
							src={chefPicture}
						/>
					</div>
				</figure>
				<div className="text-left space-y-3 p-5">
					<h2 className="text-2xl font-bold tracking-wide text-pink-600">
						{chefName}
					</h2>
					<h2 className="text-tag">
						Signature Recipes :
						<span className="text-base"> {recipes.length} items</span>
					</h2>
					<h2 className="text-tag">
						Years of Experience :
						<span className="text-base"> {yearsOfExperience} years</span>
					</h2>

					<div className="justify-end">
						<div className="flex justify-between">
							<p className="text-xl font-semibold text-pink-600 flex gap-1 pt-3">
								<FaThumbsUp />
								<span className="ml-2 -mt-1">{likes}</span>
							</p>
							<button className="btn-primary">
								<Link to={`/chefs/${id}`}>View Recipes</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Chef;