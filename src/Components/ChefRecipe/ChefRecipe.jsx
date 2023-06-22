import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';


const ChefRecipe = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    const { id, chefName, yearsOfExperience, chefPicture, likes, recipes, description } =
			chefData;
    return (
			<>
				<div>
					<div className="lg:flex lg:flex-row-reverse gap-8 bg-slate-100 shadow-xl lg:px-40 lg:py-20 py-10">
						<figure className="flex justify-center w-full lg:w-2/5">
							<img className="rounded-lg h-80" src={chefPicture} alt="Album" />
						</figure>

						<div className="text-left text-neutral lg:w-3/5 self-center space-y-3 p-8 lg:p-0">
							<h2 className="text-3xl font-bold tracking-wide text-pink-700 ">
								{chefName}
							</h2>
							<h2 className="text-tag">
								Bio :
								<span className="text-base leading-loose"> {description}</span>
							</h2>
							<h2 className="text-tag">
								Signature Recipes :
								<span className="text-base"> {recipes.length} items</span>
							</h2>
							<h2 className="text-tag">
								{yearsOfExperience} years of Experience
							</h2>
							<div className="pt-5">
								<button className="btn-outlined">
									<div className="flex justify-between">
										<p className="text-xl font-semibold text-pink-600 flex gap-1">
											<FaThumbsUp />
											<span className="ml-2 -mt-1">{likes}</span>
										</p>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<Items recipes={chefData.recipes} chefName={chefData.chefName}></Items>
			</>
		);
};

export default ChefRecipe;