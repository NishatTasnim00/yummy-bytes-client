import React from 'react';
import bb from '../../../../public/Images/bb.jpg';
const Banner = () => {
	return (
		<>
			<div
				className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 bg-gradient-to-t from-gray-900 to-transparent bg-no-repeat bg-center bg-cover -mt-5 lg:mx-0"
				loading="lazy"
				style={{ backgroundImage: "url('https://i.ibb.co/4RLt19q/bb.jpg')" }}
			>
				<div className="lg:h-[511px] lg:w-3/4 mx-auto text-center">
					<h1 className="text-4xl font-extrabold lg:text-7xl lg:font-bold  lg:pt-10">
						<span
							style={{
								background: 'linear-gradient(90deg, #f472b6 0%, #be185d 100%)',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								textFillColor: 'transparent',
							}}
						>
							Satisfy your cravings <br></br>with every bite!
						</span>
					</h1>
					<p className="text-lg font-medium lg:text-pink-300 text-pink-100 py-6  bg-black bg-opacity-60 rounded-lg lg:bg-opacity-0 mt-5 lg:mt-0">
						We're passionate about creating delicious, high-quality dishes using
						only the freshest ingredients. Whether you're looking for a quick
						bite on-the-go, we've got you covered.
					</p>
				</div>
			</div>
		</>
	);
};

export default Banner;
