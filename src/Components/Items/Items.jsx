import React from 'react';
import Item from './item';

const Items = (props) => {
	console.log(props.recipes);
	console.log(props.chefName);

	const recipes = props.recipes;
	return (
		<>
			<h2 className="title-2 lg:pt-20 lg:pb-3">
				Signature Recipes of {props.chefName}
			</h2>
			<div className="my-container">
				{recipes.map((recipe) => (
					<Item key={recipe.id} recipe={recipe}></Item>
				))}
			</div>
		</>
	);
};

export default Items;
