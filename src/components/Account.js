import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { UserContext } from "../context/userContext";
import { formatDate } from "../utils/formatDate";
import Avatar from "./Common/Avatar";
import Edit from "./Icons/Edit";
import Layout from "./Layout/Layout";

const Account = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [editing, setEditing] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const isSeller = user?.role === "seller";

  useEffect(() => {
    if (!user) {
      toast.error("Please login first!");
      return navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <div className="w-full md:w-3/4 mx-auto">
        <div className="flex items-center gap-4 mb-12 md:mb-8">
          <Avatar
            pfp={user?.pfp}
            className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
          />
          <h1 className="font-header text-2xl md:text-3xl break-all">
            {user?.username}
          </h1>
        </div>
        <div className="border-2 border-lilac rounded relative px-5 py-6">
          <div
            onClick={() => setEditing(false)}
            className="absolute border cursor-pointer -top-[1.5rem] hover:bg-lilac transition duration-300 -right-[1.5rem] border-lilac bg-black rounded-full w-14 h-14 flex items-center justify-center"
          >
            {editing ? (
              <AiOutlineClose className="w-5 h-5 text-white" />
            ) : (
              <Edit className="w-7 h-7" color="#FFF" />
            )}
          </div>
          <form>
            <p>
              {isSeller ? "Shop Name" : "Username"} :{" "}
              {editing ? <input type="text" name="username" /> : user?.username}
            </p>
            <p>
              Email:{" "}
              {editing ? <input name="email" type="email" /> : user?.email}
            </p>
            <p>
              Password:
              {editing ? <input type="password" name="password" /> : "********"}
            </p>
            {isSeller && <p>Feature Duration: {user?.shop_featured} days</p>}
            <p>Joined on: {formatDate(user?.created_at)}</p>
            {isSeller && (
              <>
                <h2 className="font-header mt-12 text-2xl">Bio:</h2>
                <p>{editing ? <textarea name="bio" /> : user?.shop_bio}</p>
              </>
            )}
          </form>
        </div>
        {/* {!isSeller && (
          <div className="mt-8">
            <h1 className="font-header text-2xl md:text-3xl break-all">
              Your Orders (count)
            </h1>
            <div className="bg-lilac mt-4 flex items-center px-2 rounded-md w-full">
              <input
                className="bg-lilac text-black placeholder:text-disabledGrey outline-none rounded-md py-2 box-border w-full"
                placeholder={`Search for orders by product name...`}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <CiSearch className="cursor-pointer" color="black" size={25} />
            </div>
          </div>
        )} */}
      </div>
    </Layout>
  );
};

export default Account;
