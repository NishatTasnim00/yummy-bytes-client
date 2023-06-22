import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../providers/AuthProviders';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
    
	console.log(location);
	if (loading) {
		return (
			<div className="font-bold text-6xl text-pink-500 w-full flex justify-center items-center min-h-[calc(vh-632px)] py-14">
				L
				<span className="w-16 h-16 border-4 border-pink-500 border-dashed rounded-full animate-spin"></span>
				ading
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;
