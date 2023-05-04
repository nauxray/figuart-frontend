import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../utils/api";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const api = new Api();

  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

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

  const getUserCart = async () => {
    const res = await api.getCart(user.id);
    setCart(res);
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")?.length > 0) {
      fetchUser(localStorage.getItem("jwtToken"), "jwt");
    }
  }, []);

  useEffect(() => {
    if (user) {
      getUserCart();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, logout, fetchUser, cart, getUserCart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
