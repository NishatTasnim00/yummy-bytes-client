import React, { useState } from 'react';
import { FaThumbsUp , FaHeart} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import swal from 'sweetalert';


const item = ({recipe}) => {
	const [fav, setFav] = useState(false)
    // console.log(recipe);
const handleFav = () =>{
	setFav(true) ; 
	if(! fav){
		swal({
		text: 'Add to favorite!',
		className: 'text-pink-400',
		buttons: false,
	})
	}
}
    const { name, ingredients, methods, rating, image } = recipe;
    return (
			<>
				<div className="lg:flex shadow-xl mt-5 lg:mt-14 rounded-lg bg-purple-100 lg:p-10">
					<figure className="self-center h-72 p-5 lg:w-2/5 rounded-lg overflow-hidden">
						<img className=" bg-cover" src={image} alt="chef" />
					</figure>

					<div className="text-left p-5 lg:w-3/5 space-y-3">
						<h2 className="text-2xl font-bold tracking-wide text-pink-600">
							{name}
						</h2>
						<h2 className="text-tag">
							Ingredients :
							<span className="text-base">
								{' '}
								{ingredients.slice().join(', ')}.
							</span>
						</h2>
						<h2 className="text-tag">
							Cooking Method :<span className="text-base"> {methods}</span>
						</h2>

						<div className="justify-end">
							<div className="flex justify-between">
								<div className="flex gap-2">
									<Rating
										style={{ maxWidth: 100 }}
										value={Math.round(rating) || 0}
										readOnly
									>
										{rating}
									</Rating>
									<p className="text-xl font-semibold text-pink-400 mt-1">
										{rating}
									</p>
								</div>
								<div
									onClick={handleFav}
									className={`text-xl font-semibold flex gap-1 pt-2 pr-2 ${
										fav ? 'text-red-500 disable=true' : 'text-gray-400'
									}`}
								>
									<FaHeart />
								</div>
								{/* <button className="btn-primary"></button> */}
							</div>
						</div>
					</div>
				</div>
			</>
		);
};

export default item;