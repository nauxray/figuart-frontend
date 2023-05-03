import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../utils/api";

export default function CheckoutSuccess() {
  const [searchParams, setSearchParams] = useSearchParams();
  const api = new Api();

  useEffect(() => {
    const sessionId = searchParams.get("sessionId");
    api.handleCheckoutSuccess(sessionId);
  }, []);

  return (
    <div className="text-center mt-64">
      <img
        className="w-40 mx-auto pb-8"
        src="/assets/sunglasses-cat.svg"
        alt="sunglasses-cat"
      />
      <h1 className="text-3xl">Payment successful!</h1>
      <h2 className="text-xl pt-2">Thank you for your order.</h2>
    </div>
  );
}
