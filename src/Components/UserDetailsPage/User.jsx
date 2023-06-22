import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import person from '../../../public/icons/user.png';
import { updateProfile } from 'firebase/auth';

const UserDetailsPage = () => {
	const { user } = useContext(AuthContext);
	console.log(user);

	const handleUpdateUserData = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		console.log(name, photo);
		updateUserData(user, name, photo);
	};
	const updateUserData = (user, name, photo) => {
		updateProfile(user, {
			displayName: name,
			photoURL: photo || user.photoURL,
		})
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
							<label htmlFor="my-modal-3" className="btn btn-primary">
								Update user info.
								{/* <button className="btn btn-primary">Update user info.</button> */}
							</label>

							<input type="checkbox" id="my-modal-3" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box relative">
									<label
										htmlFor="my-modal-3"
										className="btn btn-sm btn-circle absolute right-2 top-2"
									>
										✕
									</label>
									<h3 className="text-lg font-bold">
										Congratulations random Internet user!
									</h3>
									<p className="py-4">
										You've been selected for a chance to get one year of
										subscription to use Wikipedia for free!
									</p>
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
