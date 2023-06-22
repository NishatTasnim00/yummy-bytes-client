import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
 import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

 const auth =getAuth(app)
const Login = () => {
	const [loginError, setLoginError] = useState('');
	// const [error, setError] = useState('');

	

	const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
	const handleLogIn = async (event) => {
 
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result.user);
			})
			.catch((error) => {
				const text = error.code.split('/');
				const text1 = text[1].split('-').join(' ');
				const err = text1.charAt(0).toUpperCase() + text1.slice(1) + ".";
				setLoginError(err);
				console.log(loginError);
				alert(err);
			});
	};

	return (
		<div>
			<div className="min-h-screen bg-base-200 flex justify-center pb-10">
				<div className="hero-content flex-col lg:w-2/5">
					<div className="text-center p-5">
						<h1 className="text-5xl font-bold text-pink-700">
							Loginsssss now!
						</h1>
					</div>
					<form
						onSubmit={handleLogIn}
						className="card w-full shadow-2xl bg-base-100"
					>
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="text-form">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									required
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="text-form">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									required
									className="input input-bordered"
								/>
								<label className="label">
									<a href="#" className="text-form hover:text-purple-500">
										Forget password?
									</a>
								</label>
							</div>
							<div>
								{loginError ? (
									<p className="text-error">{loginError}</p>
								) : (
									<p className="text-error">NO ERROR</p>
								)}
							</div>

							<div className="form-control mt-6">
								<button type="submit" className="btn btn-primary">
									Login
								</button>
							</div>
						</div>
					</form>
					<p className="text-form text-center">
						Don't Have an Account?
						<Link
							to="/registration"
							className="hover:underline hover:text-purple-500"
						>
							Register
						</Link>
					</p>
					<div>
						<p className="text-pink-500">or sign up using</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
