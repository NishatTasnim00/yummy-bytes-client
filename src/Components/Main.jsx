import React, { useContext } from 'react';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Banner from './Shared/Banner/Banner';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Main = () => {
	const {loading} =useContext(AuthContext)
	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center h-screen py-14">
				L
				<span className="w-16 h-16 border-4 border-pink-500 border-dashed rounded-full animate-spin"></span>
				ading
			</div>
		);
	}
    return (
			<div>
				<Header></Header>
				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		);
};

export default Main;