import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import person from '../../../public/icons/user.png';
import { updateProfile } from 'firebase/auth';

const UserDetailsPage = () => {
	const { user, updateUserData } = useContext(AuthContext);
	console.log(user);

	const handleUpdateUserData = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		console.log(name, photo);
		// updateUserData(user, name, photo)
		event.target.reset();

		//  const updateUserData = (user, name, photo) => {
		// 			updateProfile(user, {
		// 				displayName: name || user.displayName,
		// 				photoURL: photo || user.photoURL,
		// 			})
		updateUserData(name, photo)
			.then(() => {
				console.log('Updated');
				console.log(user);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className="my-container">
			<div className="flex justify-center">
				<div className="card w-4/12 shadow-xl items-center bg-pink-100">
					<figure className="px-10 pt-10">
						<img
							src={user.photoURL ? user.photoURL : person}
							alt=""
							className="rounded-xl"
						/>
					</figure>
					<div className="card-body items-center text-center">
						<h2 className="card-title">
							{user.displayName ? user.displayName : 'Default'}
						</h2>
						<p>{user.email}</p>
						<div className="card-actions">
							<label htmlFor="my-modal" className="btn btn-primary">
								Update user info.
							</label>
							<input type="checkbox" id="my-modal" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box relative">
									<label
										htmlFor="my-modal"
										className="btn bg-pink-500 btn-sm btn-circle absolute right-2 top-2 border-pink-600 hover:bg-purple-500"
									>
										✕
									</label>

									{/* form code */}
									<div className="bg-base-200 flex justify-center pb-10">
										<div className="hero-content flex-col lg:w-full">
											<div className="text-center p-5">
												<h1 className="text-5xl font-bold text-pink-700">
													Update now!
												</h1>
											</div>
											<div className="card w-full shadow-2xl bg-base-100">
												<form
													onSubmit={handleUpdateUserData}
													className="card-body"
												>
													<div className="form-control">
														<label className="label">
															<span className="text-form">Name</span>
														</label>
														<input
															type="text"
															name="name"
															placeholder="name"
															className="input input-bordered"
														/>
													</div>

													<div className="form-control">
														<label className="label">
															<span className="text-form">Photo url</span>
														</label>
														<input
															type="text"
															name="photo"
															placeholder="photo url"
															className="input input-bordered"
														/>
													</div>
													<div
														className="form-control mt-6"

														// htmlFor="my-modal"
													>
														<button className="btn btn-primary">Update</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetailsPage;
