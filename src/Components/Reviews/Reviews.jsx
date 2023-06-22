import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
	const [reviewData, setReviewData] = useState([]);
	// console.log(reviewData);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				'https://yummy-bytes-server-nishattasnim00.vercel.app/reviews'
			);
			const data = await response.json();
			setReviewData(data);
		};
		fetchData();
	}, []);
	return (
		<div className="lg:flex">
			<div className="lg:w-4/12 p-20 pt-32 relative">
				<img className='absolute top-20 left-24' src="../../../public/Images/inspiration.png" alt="" />
				<h1 className="title-3 lg:pt-30">Why Do People Love Us</h1>
			</div>
			<div className="lg:w-8/12 lg:flex gap-4">
				{reviewData.map((data) => (
					<Review key={data.name} data={data}></Review>
				))}
			</div>
		</div>
	);
};

export default Reviews;
