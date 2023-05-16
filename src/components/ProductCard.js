import React, { useState } from "react";
import { Link } from "react-router-dom";

const Badge = ({ content }) => (
  <p className="text-xs mr-1 inline-block w-fit bg-lilac text-black rounded-md px-2 py-0.5 font-medium">
    {content}
  </p>
);

const ProductCard = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-black border-2 flex flex-col max-h-[28rem] border-lilac rounded-md overflow-hidden md:max-h-[22rem] w-full max-md:mx-auto cursor-pointer hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-4/5 overflow-hidden bg-lilac flex items-center justify-center">
        {imgError ? (
          <div>No Photo</div>
        ) : (
          <img
            onError={() => setImgError(true)}
            src={product.img_url}
            alt={product.name}
            className="object-cover w-full"
          />
        )}
      </div>
      <div className="flex flex-col flex-1 p-2">
        <p className="font-header truncate">{product.name}</p>
        <p className="text-lilac flex-1 text-sm">{product.brand.name}</p>
        <div className="flex justify-between mt-auto items-end">
          <div className="">
            {product.tags?.length > 0 ? (
              product.tags?.map((i) => <Badge key={i.id} content={i.name} />)
            ) : (
              <Badge content={product.series.name} />
            )}
          </div>
          <p className="text-yellowLight mt-2 w-fit text-lg flex-shrink-0">
            ${parseFloat(product.price).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
