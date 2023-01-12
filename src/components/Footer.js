import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../context/userContext";

export default function Footer() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="ml-auto w-fit">
        <img className="w-44" src="/assets/footer-cat.svg" alt="footer-cat" />
      </div>
      <footer className="pb-36 pt-12 px-8 sm:pb-20 md:px-14 bg-lilac flex justify-between text-white gap-4 font-normal">
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            <img src="/logos/logo1.svg" className="w-20" alt="logo" />
          </Link>
          &#169; 2022
        </div>
        <div className="flex gap-x-16 gap-y-4 h-fit">
          <Link
            className="text-black h-fit w-fit transition duration-300 hover:text-white"
            to="/"
          >
            <span>Search</span>
          </Link>
          {user && (
            <Link
              className="text-black h-fit w-fit transition duration-300 hover:text-white"
              to="/account"
            >
              <span>Account</span>
            </Link>
          )}
          <Link
            className="text-black h-fit w-fit transition duration-300 hover:text-white"
            to="/login"
          >
            <span>Sign in</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
