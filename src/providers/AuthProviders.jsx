import React, { createContext, useEffect, useState } from 'react';
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// fetch data
	const [chefsData, setChefsData] = useState([]);
	useEffect(() => {
		fetch('https://yummy-bytes-server-nishattasnim00.vercel.app/chefs')
			.then((res) => res.json())
			.then((data) => setChefsData(data));
	}, []);
	// console.log(chefsData);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	// sign in function

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const resetPass = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	const updateUserData = ( name, photo) => {
		setLoading(true);
		return updateProfile(user, {
			displayName: name || user.displayName,
			photoURL: photo || user.photoURL,
		});
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
			setLoading(false);
		});
		return () => {
			unsubscribed();
		};
	}, [loading]);
	const authInfo = {
		user,
		loading,
		chefsData,
		createUser,
		signIn,
		logOut,
		googleSignIn,
		githubSignIn,
		resetPass,
		updateUserData,
	};

	return (
		<div>
			<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProviders;
