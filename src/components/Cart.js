import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";

import { UserContext } from "../context/userContext";
import Api from "../utils/api";
import Button from "./Button";
import Layout from "./Layout/Layout";
import Loader from "./Loader";

const Cart = () => {
  const { user } = useContext(UserContext);
  const [groupedCart, setGroupedCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const groupByShop = (cart) => {
    const grouped = {};

    cart.forEach((item) => {
      const product = item.product;
      const shopName = product.shop_name;

      if (!grouped[shopName]) {
        grouped[shopName] = [
          { ...item, buyQty: item.product.quantity !== 0 ? 1 : 0 },
        ];
      } else {
        const currShopItems = grouped[shopName];
        const sameProductIndex = currShopItems.findIndex(
          (prod) => prod.product.id === item.product.id
        );

        if (sameProductIndex >= 0) {
          const sameProduct = grouped[shopName][sameProductIndex];
          const productQty = sameProduct.product.quantity;
          const buyQty = sameProduct.buyQty;

          grouped[shopName][sameProductIndex] = {
            ...item,
            buyQty: buyQty < productQty ? buyQty + 1 : productQty,
          };
        } else {
          currShopItems.push({
            ...item,
            buyQty: item.product.quantity !== 0 ? 1 : 0,
          });
        }
      }
    });
    setGroupedCart(grouped);
  };

  const fetchCartItems = async () => {
    setLoading(true);
    const res = await new Api().getCart(user.id);
    res.length > 0 ? groupByShop(res) : setGroupedCart({});
    setLoading(false);
  };

  useEffect(() => {
    user?.id && fetchCartItems();
  }, [user]);

  const incrementQty = (key, index, currentQty) => {
    const newCart = { ...groupedCart };
    newCart[key][index].buyQty = currentQty + 1;
    setGroupedCart(newCart);
  };

  const decrementQty = (currentQty, key, index) => {
    if (currentQty <= 1) return;
    const newCart = { ...groupedCart };
    newCart[key][index].buyQty = currentQty - 1;
    setGroupedCart(newCart);
  };

  const handleQtyChange = (e, key, index) => {
    const val = parseInt(e.target.value);
    const newCart = { ...groupedCart };
    newCart[key][index].buyQty = val;
    setGroupedCart(newCart);
  };

  const removeItem = async (key, index) => {
    setDisabled(true);
    const item = groupedCart[key][index];
    await new Api().removeFromCart(item.product_id);
    toast.success(`Removed ${item.name} from your cart!`);
    await fetchCartItems();
    setDisabled(false);
  };

  const getTotalPrice = () => {
    let total = 0;
    Object.values(groupedCart).forEach((itemsArr) =>
      itemsArr.forEach((product) => {
        total += product.buyQty * parseFloat(product.product.price);
      })
    );

    return isNaN(total.toFixed(2)) ? 0 : total.toFixed(2);
  };

  return (
    <Layout className="mt-20 md:mt-10 w-11/12">
      <div className="w-full md:w-3/4 gap-6 sm:gap-8 flex flex-col mx-auto">
        <div className="flex gap-4 items-center">
          <AiOutlineShoppingCart className="text-lilac text-5xl" />
          <h1 className="font-header text-3xl">Your Cart</h1>
        </div>
        {loading ? (
          <Loader className="mx-auto my-40" />
        ) : Object.keys(groupedCart).length === 0 ? (
          <div className="mx-auto mt-10 text-base sm:text-xl">
            You have no items in your cart :(
          </div>
        ) : (
          Object.keys(groupedCart).map((key, index) => {
            const cartItems = groupedCart[key];
            return (
              <React.Fragment key={key}>
                <div className="border-b border-lilac pb-8 overflow-hidden break-words">
                  <div className="flex gap-2 mb-4 items-center">
                    <img
                      className="w-9 h-9 rounded-full"
                      alt="pfp"
                      src={
                        cartItems[0].product.pfp ?? "/assets/default-avatar.jpg"
                      }
                    />
                    <span className="sm:text-lg text-base">{key}</span>
                  </div>
                  {cartItems.map((prod, i) => {
                    const currentQty = prod?.buyQty ?? 1;
                    const maxQty = prod.product.quantity;

                    return (
                      <div
                        className="flex gap-3"
                        key={prod.product.id + "_product"}
                      >
                        <img
                          src={prod.product.img_url}
                          className="w-28 h-28 border border-lilac rounded"
                          alt={prod.product.name}
                        />
                        <div className="flex flex-col flex-1">
                          <p className="text-lg">{prod.product.name}</p>
                          {maxQty > 0 ? (
                            <p className="text-yellowLight text-sm flex-1">
                              {maxQty} left
                            </p>
                          ) : (
                            <p className="text-red text-sm flex-1">Sold out</p>
                          )}
                          <p className="text-lilac text-xl">
                            ${parseFloat(prod.product.price).toFixed(2)}
                          </p>
                          <div className="items-center flex-wrap gap-y-2 flex gap-x-10 justify-between pt-8 xs:pt-0">
                            <button
                              disabled={disabled}
                              className="text-red disabled:text-disabledGrey text-sm font-semibold hover:opacity-80 transition duration-200 cursor-pointer disabled:pointer-events-none"
                              onClick={() => removeItem(key, i)}
                            >
                              Remove Item
                            </button>
                            <div className="flex gap-2 items-center flex-shrink-0">
                              <span>Quantity:</span>
                              <button
                                disabled={disabled}
                                className="text-2xl"
                                onClick={() => decrementQty(currentQty, key, i)}
                              >
                                -
                              </button>
                              <input
                                disabled={disabled}
                                className="border-2 text-base border-lilac py-0.5 outline-none w-12 text-center rounded-md bg-black "
                                type="number"
                                min={1}
                                max={maxQty}
                                value={currentQty}
                                onChange={(e) => handleQtyChange(e, key, i)}
                              />
                              <button
                                disabled={disabled}
                                className="text-2xl"
                                onClick={() => {
                                  currentQty < maxQty &&
                                    incrementQty(key, i, currentQty);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {index === Object.keys(groupedCart).length - 1 && (
                  <div className="flex flex-wrap gap-x-8 gap-y-3 justify-between">
                    <span className="text-xl sm:text-2xl font-light">
                      Total: ${getTotalPrice()}
                    </span>
                    <Button
                      disabled={disabled}
                      text={"Check out"}
                      withIcon
                      className="w-40"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default Cart;
