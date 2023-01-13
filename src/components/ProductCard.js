import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-black border-2 flex flex-col border-lilac rounded-md overflow-hidden max-h-[20rem] xl:w-[18rem] sm:w-[15rem] w-full  max-md:mx-auto cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <div className="h-[50%] overflow-hidden flex items-center justify-center">
        <img
          src={product.img_url}
          alt={product.name}
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col flex-1 p-2">
        <p className="font-header w-4/5">{product.name}</p>
        <p className="text-lilac flex-1 text-sm">{product.brand.name}</p>
        <p className="text-yellowLight w-fit ml-auto text-lg">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
