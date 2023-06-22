import React from 'react';
import Chefs from '../Chefs/Chefs';
import Banner from '../Shared/Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Cousine from '../Cousine/Cousine';


const Home = () => {
    return (
			<div>
				<Banner></Banner>
				<div className="my-container">
					<Chefs></Chefs>
					<Cousine></Cousine>
					<Reviews></Reviews>
				</div>
			</div>
		);
};

export default Home;