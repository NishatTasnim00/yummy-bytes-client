import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import '../index.css';
import Main from '../Components/Main.jsx';
import Home from '../Components/Home/Home';
import ChefRecipe from '../Components/ChefRecipe/ChefRecipe';
import Logins from '../Components/Login/Logins';
import Login from '../Components/Login/Login';

import Registration from '../Components/Registration/Registration';
import ErrorPage from '../Components/ErrorPage';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import Blog from '../Components/Blog/Blog';
import UserDetailsPage from '../Components/UserDetailsPage/UserDetailsPage';
import User from '../Components/UserDetailsPage/User';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/chefs/:id',
				element: (
					<PrivateRoute>
						<ChefRecipe></ChefRecipe>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://yummy-bytes-server-nishattasnim00.vercel.app/chefs/${params.id}`
					),
			},
			{
				path: '/login',
				element: <Logins></Logins>,
			},
			{
				path: '/registration',
				element: <Registration></Registration>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/userDetails',
				element: (
					<PrivateRoute>
						<UserDetailsPage></UserDetailsPage>
						{/* <User></User> */}
					</PrivateRoute>
				),
			},
			{
				
			}
		],
	},
]);

export default router;
