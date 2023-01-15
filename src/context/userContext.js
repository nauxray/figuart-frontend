import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../utils/api";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const api = new Api();

  const logout = async () => {
    await api.logout();
    localStorage.removeItem("jwtToken");
    setUser(null);
    navigate("/login");
  };

  const fetchUser = async (token, type) => {
    let id = token;
    if (type === "jwt") {
      const tokens = token.split(".");
      id = JSON.parse(atob(tokens[1])).userId;
    }
    const user = await api?.getUser(id);
    setUser(user);
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")?.length > 0) {
      fetchUser(localStorage.getItem("jwtToken"), "jwt");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, logout, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
