import React, { createContext, useEffect, useState } from 'react'


export const AuthContext = createContext(); 

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    let cuser = localStorage.getItem("user");
    if (cuser === null) {
      localStorage.setItem('user', '');
      cuser = '';
    }
    setCurrentUser(cuser);
  }, []);

  const login = (token, user) => {
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", user);
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setCurrentUser("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;