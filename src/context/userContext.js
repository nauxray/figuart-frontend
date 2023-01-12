import React, { useState } from "react";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={(user, setUser, logout)}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
