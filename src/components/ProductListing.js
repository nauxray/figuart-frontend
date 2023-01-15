import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Api from "../utils/api";
import { formatDate } from "../utils/formatDate";
import Button from "./Button";
import Loader from "./Loader";

const ProductListing = () => {
  const productId = useParams().id;
  const navigate = useNavigate();
  const api = new Api();

  const [loading, setLoading] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    setLoading(true);
    const data = await api.getProduct(productId);
    setProduct(data);
    console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    if (!productId) return navigate("/");
    fetchProduct();
  }, []);

  const addProductToCart = async () => {
    setAddingToCart(true);
    const res = await api.addToCart(productId);
    setAddingToCart(false);
    if (res.createdItemId) {
      return toast.success(`Added ${product.name} to cart!`);
    }
  };

  return (
    <div className="mx-auto w-3/4 mt-12 flex gap-8">
      {loading || !product ? (
        <div className="mx-auto w-fit my-40">
          <Loader />
        </div>
      ) : (
        <>
          <div className="border-2 rounded border-lilac w-80 h-80 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={product.img_url}
              alt={product.name}
            />
          </div>
          <div className="flex-1">
            <section className="flex flex-col gap-4">
              <h1 className="font-header text-3xl">{product.name}</h1>
              <p className="-mt-2">
                {product.quantity <= 0
                  ? "Sold out"
                  : `Qty: ${product.quantity} left`}
              </p>
              <p className="text-yellowLight text-3xl">
                ${parseFloat(product.price).toFixed(2)}
              </p>
              <Button
                disabled={addingToCart || product.quantity <= 0}
                clickHandler={addProductToCart}
                className="gap-4 w-fit mt-4 px-4 py-1.5"
                text={"Add to cart"}
                withIcon
                customIcon={<BiShoppingBag size={24} />}
              />
            </section>
            <section className="font-light mt-16">
              <h1 className="text-lg">Description</h1>
              <hr className="border-lilac my-2" />
              <p>{product.description}</p>

              <h1 className="text-lg mt-10">Specifications</h1>
              <hr className="border-lilac my-2" />
              <div className="flex flex-col gap-2">
                <p>Brand: {product.brand.name}</p>
                <div>Sold by: {product.shop.username}</div>
                <p>Listed on: {formatDate(product.created_at)}</p>
                <p>
                  Materials:{" "}
                  {product.materials?.length > 0
                    ? product.materials?.map((mat) => mat.name).join(", ")
                    : "Not listed"}
                </p>
                <p>Series: {product.series.name}</p>
                <p>
                  Series Release Date: {formatDate(product.series.release_date)}
                </p>
                <p>
                  Tags:{" "}
                  {product.tags?.length > 0
                    ? product.tags?.map((tag) => tag.name).join(", ")
                    : "Not listed"}
                </p>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListing;
