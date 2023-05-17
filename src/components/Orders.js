import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import { UserContext } from "../context/userContext";
import Api from "../utils/api";
import { formatDate } from "../utils/formatDate";
import Loader from "./Common/Loader";

export default function Orders() {
  const { user } = useContext(UserContext);
  const api = new Api();

  const [loadingOrders, setLoadingOrders] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [orders, setOrders] = useState([]);
  const [fetchingStripeUrl, setFetchingStripeUrl] = useState(false);

  const sortByStatus = (orders) => {
    const sorted = {};
    orders.forEach((i) => {
      if (sorted[i.status]) {
        sorted[i.status].push(i);
      } else {
        sorted[i.status] = [i];
      }
    });
    return sorted;
  };

  const fetchOrders = async () => {
    setLoadingOrders(true);
    const data = await api.getUserOrders();
    setOrders(sortByStatus(data));
    setLoadingOrders(false);
  };

  const handleSearch = async () => {
    setLoadingOrders(true);
    const data = await api.searchUserOrders(searchInput);
    setOrders(sortByStatus(data));
    setLoadingOrders(false);
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const completePayment = async (orderId) => {
    setFetchingStripeUrl(true);
    const {
      data: { url },
    } = await api.completePayment(orderId);
    return window.location.replace(url);
  };

  const cancel = async (orderId) => {
    setFetchingStripeUrl(true);
    await api.cancelOrder(orderId);
    setFetchingStripeUrl(false);
    fetchOrders();
  };

  return (
    <div className="mt-8">
      <h1 className="font-header text-2xl md:text-3xl break-all">
        Your Orders ({Object.values(orders)?.flat()?.length})
      </h1>
      <div className="bg-lilac mt-4 flex items-center px-2 rounded-md w-full">
        <input
          className="bg-lilac text-black placeholder:text-black outline-none rounded-md p-2 box-border w-full"
          placeholder={`Search for orders by order ID or product name...`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <CiSearch
          className="cursor-pointer"
          color="black"
          size={25}
          onClick={handleSearch}
        />
      </div>
      <div className="flex flex-col gap-y-3 pt-8">
        {loadingOrders ? (
          <Loader className="mx-auto mt-8" />
        ) : (
          Object.keys(orders).map((status) => (
            <details key={status} open className="mb-4">
              <summary className="cursor-pointer text-lg text-lilac capitalize w-fit">
                {status.toLowerCase()} ({orders[status].length})
              </summary>
              {orders[status]?.map((order) => {
                const orderItems = order?.orderItems;
                const grouped = {};
                orderItems?.forEach((item) => {
                  if (grouped[item.product_id]) {
                    grouped[item.product_id].qty += 1;
                  } else {
                    grouped[item.product_id] = { ...item, qty: 1 };
                  }
                });
                return (
                  <div
                    key={order.id}
                    className="border-lilac border-2 mt-4 rounded-lg p-4"
                  >
                    <div className="flex gap-y-2 gap-x-8">
                      <div>
                        <p>Order ID: {order.id}</p>
                        <p>Date: {formatDate(order.created_at)}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p>
                          {orderItems?.length} item
                          {orderItems?.length === 1 ? "" : "s"}
                        </p>
                        <p>Total: S${order.cost}</p>
                        <p>Status: {order.status}</p>
                        {status === "UNPAID" && (
                          <>
                            <p
                              className={`underline hover:text-lilac transition cursor-pointer ${
                                fetchingStripeUrl && "cursor-wait text-lilac"
                              }`}
                              onClick={() =>
                                !fetchingStripeUrl && completePayment(order.id)
                              }
                            >
                              Complete Payment
                            </p>
                            <p
                              className={`underline hover:text-lilac transition cursor-pointer ${
                                fetchingStripeUrl && "cursor-wait text-lilac"
                              }`}
                              onClick={() =>
                                !fetchingStripeUrl && cancel(order.id)
                              }
                            >
                              Cancel Order
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 overflow-x-scroll pb-2">
                      {Object.keys(grouped).map((i, index) => {
                        return (
                          <div key={index} className="min-w-[9rem] w-36">
                            <a
                              href={`/product/${grouped[i].product_id}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={grouped[i].img_url}
                                className="w-36 rounded-md overflow-hidden"
                                alt={grouped[i].name}
                              />
                            </a>
                            <p className="text-sm py-1">{grouped[i].name}</p>
                            <p className="text-sm">Qty: {grouped[i].qty}</p>
                            <p className="text-sm">
                              Price: S${grouped[i].price}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </details>
          ))
        )}
      </div>
    </div>
  );
}
