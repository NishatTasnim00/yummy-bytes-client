import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../../providers/AuthProviders';
import person from '../../../../public/icons/person.png'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();
	// console.log(user.email);

	const handleLogOut = () =>{
		logOut()
		.then()
		.catch(error=>console.log(error.message))
	}
	const showUserDetails = () =>{
user && navigate('/userDetails')
	}

	return (
		<div>
			<div className="px-4 py-3 sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-16 bg-[#4d4466] h-28">
				<div className="relative flex items-center justify-between pt-0">
					<Link
						to="/"
						aria-label="YummyBytes"
						title="YummyBytes"
						className="inline-flex items-center"
					>
						<div className="ml-2 lg:ml-1 text-3xl font-bold tracking-wide text-pink-700 ">
							Yummy Bytes
						</div>
					</Link>
					<ul className="text-xl items-center hidden space-x-8 lg:flex">
						<li>
							<NavLink
								to="/"
								aria-label="Home"
								title="Home"
								className={({ isActive }) => (isActive ? 'active' : 'default')}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								aria-label="About Us"
								title="About"
								className={({ isActive }) => (isActive ? 'active' : 'default')}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/blog"
								aria-label="Blog"
								title="Blog"
								className={({ isActive }) => (isActive ? 'active' : 'default')}
							>
								Blog
							</NavLink>
						</li>
					</ul>
					<div className="hidden lg:flex">
						{user ? (
							<div className="hidden lg:flex">
								<figure
									className="h-16 w-16 rounded-full tooltip tooltip-bottom tooltip-info"
									data-tip={user.displayName ? user?.displayName : 'default'}
								>
									<img
										onClick={showUserDetails}
										className="h-16 w-16 rounded-full tooltip tooltip-bottom tooltip-info"
										data-tip={user.displayName ? user?.displayName : 'default'}
										src={user.photoURL ? user?.photoURL : person}
										alt=""
									/>
								</figure>

								<button onClick={handleLogOut} className="btn-primary">
									<span className="px-2">Log Out</span>
								</button>
							</div>
						) : (
							<>
								<Link to="/login">
									<button className="btn-primary">
										<span className="px-2">Login</span>
									</button>
								</Link>
							</>
						)}
					</div>

					<div className="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg className="w-5 text-pink-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div className="absolute z-10 top-0 left-0 w-full">
								<div className="p-5 bg-[#4d4466] border-slate-700 border rounded shadow-sm">
									<div className="flex items-center justify-between mb-4">
										<div>
											<Link
												to="/"
												aria-label="YummyBytes"
												title="YummyBytes"
												className="inline-flex items-center"
											>
												<div className="flex items-center justify-center w-8 h-8 rounded-full">
													<img src="../../../public/person.png" alt="" />
												</div>
												<span className="ml-2 text-xl font-bold tracking-wide text-pink-700 uppercase">
													Yummy Bytes
												</span>
											</Link>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className="w-5 text-pink-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>

									<div>
										{user ? (
											<div className="flex justify-between">
												<figure
													className="h-16 w-16 rounded-full tooltip tooltip-info"
													data-tip={user.displayName}
												>
													<img
														className="h-16 w-16 rounded-full tooltip tooltip-info"
														data-tip={user.displayName}
														src={user?.photoURL ? user?.photoURL : person}
														alt=""
													/>
												</figure>

												<button onClick={handleLogOut} className="btn-primary">
													Log Out
												</button>
											</div>
										) : (
											<>
												<Link to="/login">
													<button className="btn-primary">Login</button>
												</Link>
											</>
										)}
									</div>

									<nav>
										<ul className="space-y-4">
											<li
												className={({ isActive }) =>
													isActive ? 'active' : 'default'
												}
											>
												<Link
													to="/"
													aria-label="Home"
													title="Home"
													className="font-medium tracking-wide text-pink-400 transition-colors duration-200 hover:text-info"
												>
													Home
												</Link>
											</li>

											<li
												className={({ isActive }) =>
													isActive ? 'active' : 'default'
												}
											>
												<Link
													to="/about"
													aria-label="About"
													title="About"
													className="font-medium tracking-wide text-pink-400 transition-colors duration-200 hover:text-info"
												>
													About Us
												</Link>
											</li>

											<li
												className={({ isActive }) =>
													isActive ? 'active' : 'default'
												}
											>
												<Link
													to="/blog"
													aria-label="Blog"
													title="Blog"
													className="font-medium tracking-wide text-pink-400 transition-colors duration-200 hover:text-info"
												>
													Blog
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
