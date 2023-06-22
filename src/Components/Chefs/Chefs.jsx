import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Chef from '../Chef/Chef';
const Chefs = () => {
const { chefsData } = useContext(AuthContext);
// console.log(chefsData);
    return (
			<>
				<h2 className="title-2 pb-7 lg:pb-16">Chef Gallery</h2>

				<div className="container">
					{chefsData.map((chefData) => (
						<Chef key={chefData.id} chefData={chefData}></Chef>
					))}
				</div>
			</>
		);
};
export default Chefs;