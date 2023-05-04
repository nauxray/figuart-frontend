import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import { UserContext } from "../context/userContext";
import Avatar from "./Common/Avatar";
import Button from "./Common/Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const openSideNav = () => setNavOpen(true);
  const closeSideNav = () => setNavOpen(false);

  const { user, logout, cart } = useContext(UserContext);

  return (
    <>
      <div className="md:hidden flex items-center justify-between">
        <FiMenu
          size={25}
          className="cursor-pointer text-lilac"
          onClick={openSideNav}
        />
        <Link to="/">
          <img src="/logos/logo2.svg" alt="logo" className="w-36" />
        </Link>
        <Link to="/" className={user ? "" : "pointer-events-none"}>
          <BiShoppingBag size={25} className="text-lilac" />
        </Link>
      </div>
      {/* mobile navbar */}
      <nav
        className={`h-full w-0 fixed z-[1] top-0 left-0 bg-black overflow-x-hidden transition-all duration-300 ${
          navOpen ? "w-80 border-lilac border-2 rounded-r-md" : ""
        }`}
      >
        <div className="flex">
          <Link to="/" className="my-8 mx-auto" onClick={closeSideNav}>
            <img src="/logos/logo1.svg" alt="logo" />
          </Link>
        </div>
        <AiOutlineClose
          className="cursor-pointer absolute right-4 top-4"
          size={20}
          onClick={closeSideNav}
        />
        <div className="flex flex-col p-8 text-lg pt-0 gap-4 items-baseline">
          {!user && (
            <Link
              to="/login"
              className="mx-auto mt-0 mb-6"
              onClick={closeSideNav}
            >
              <Button text={"Sign in"} withIcon />
            </Link>
          )}
          <Link to="/" onClick={closeSideNav}>
            <div className="flex gap-2 items-center">
              <CiSearch size={32} /> Search
            </div>
          </Link>
          <Link to="/#top5" onClick={closeSideNav}>
            <div className="flex gap-2 items-center">
              <img src="/assets/icons/like.svg" alt="like" className="w-8" />
              Top 5 Products
            </div>
          </Link>
          <Link to="/#featured" onClick={closeSideNav}>
            <div className="flex gap-2 items-center">
              <img src="/assets/icons/star.svg" alt="star" className="w-8" />
              Featured Sellers
            </div>
          </Link>
          {user && (
            <Link to="/account" onClick={closeSideNav}>
              <div className="flex gap-2 items-center">
                <Avatar pfp={user?.pfp} className="w-8 h-8" />
                Account
              </div>
            </Link>
          )}
        </div>
        {!user && (
          <div className="absolute bottom-8 left-[calc(50%-56px)]">
            <Button clickHandler={logout} text={"Log out"} withIcon />
          </div>
        )}
      </nav>
      {/* desktop navbar */}
      <nav className="hidden md:flex py-4 px-8 items-center justify-between">
        <Link to="/">
          <img src="/logos/logo1.svg" alt="logo" className="w-20" />
        </Link>
        <div className="flex gap-6 items-center">
          {user ? (
            <>
              <Link to="/account">
                <div className="flex gap-2 items-center">
                  <Avatar pfp={user?.pfp} className="w-8 h-8" />
                  {user?.username ?? "Account"}
                </div>
              </Link>
              <Link to="/cart" className="relative">
                {cart.length > 0 && (
                  <div className="font-semibold text-xs absolute top-[-0.8rem] right-[-0.5rem] bg-lilac rounded-md h-fit w-fit px-1 text-black border-white border">
                    {cart.length}
                  </div>
                )}
                <BiShoppingBag size={25} className="text-lilac" />
              </Link>
              <Button clickHandler={logout} text={"Log out"} />
            </>
          ) : (
            <Link to="/login">
              <Button text={"Sign in"} withIcon />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
