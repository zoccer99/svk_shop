
import React, { createContext, useEffect, useState } from 'react'


export const userContext = createContext(""); 

const UserProvider = ({children}) => {
  const [ currentUser, setCurrentUser ] = useState("");
	useEffect(() => {
		const checkLoggedIn = async () => {
			let cuser = localStorage.getItem("user")
			console.log("render")
			if (cuser === null) {
				localStorage.setItem('user', '');
				cuser = '';
			}
			setCurrentUser(cuser);
		};
		checkLoggedIn();
	}, []);


	return (
		<userContext.Provider value={[currentUser, setCurrentUser]}>
			{children}
		</userContext.Provider>
	);
};
export default UserProvider;