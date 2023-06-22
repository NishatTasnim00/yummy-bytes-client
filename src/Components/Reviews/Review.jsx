import React from 'react';
import comm from '../../../public/icons/comm.png'

const Review = ({data}) => {
    // console.log(data);
    const {name, image, profession, comment} = data;
    return (
			<div className="w-full h-96">
				<div className="card w-full shadow-xl bg-orange-100 bg-opacity-20 h-full">
					<div className="flex p-3 pt-10 gap-3">
						<figure className="h-24 w-24">
							<img src={image} className="rounded-full h-20 w-20" />
						</figure>
						<h2 className="text-tag pt-5">
							{name} <span className="text-form">/{profession}</span>
						</h2>
					</div>
					<div className="card-body items-center text-center">
						<p className="text-base-2">{comment}</p>
						<div className="card-actions">
							<img className="h-10" src={comm} alt="" />
						</div>
					</div>
				</div>
			</div>
		);
};

export default Review;