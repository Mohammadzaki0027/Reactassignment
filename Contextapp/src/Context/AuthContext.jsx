import { createContext } from "react";
import React from "react";
export const AuthContext = createContext();

export const Authpro = ({ children }) => {
  const [auth, setAuth] = React.useState({ status:false, token: null });

  const login = (token) => {
    setAuth({ ...auth, status: true, token: token });
  };
  const logout = () => {
    setAuth({ ...auth,status: false, token: null });
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
