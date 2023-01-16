import React from "react";
import Avatar from "./Common/Avatar";

const SellerCard = ({ shop }) => {
  return (
    <div className="bg-black border-2 flex flex-col border-lilac rounded-md overflow-hidden md:max-w-[70%] mx-auto">
      <div className="flex flex-col flex-1 p-2">
        <div className="flex gap-2 items-center">
          <Avatar pfp={shop.user?.pfp} className="w-10 h-10" />
          <span className="font-header w-4/5 sm:text-lg text-sm">
            {shop.user.username}
          </span>
        </div>
        <p className="text-lilac flex-1 text-sm pl-12">{shop.shop_bio}</p>
      </div>
    </div>
  );
};

export default SellerCard;
