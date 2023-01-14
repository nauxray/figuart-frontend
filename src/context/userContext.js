import React, { useState } from "react";
import Api from "../utils/api";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    console.log("log out");
    const api = new Api();
    api.logout();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
