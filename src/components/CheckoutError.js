import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export default function CheckoutError() {
  return (
    <div className="text-center mt-64">
      <img
        className="w-52 mx-auto pb-8"
        src="/assets/lie-down-cat.svg"
        alt="lie-down-cat"
      />
      <h1 className="text-3xl">Something went wrong!</h1>
      <h2 className="text-xl pt-4">
        Please visit your profile page to complete your payment.
      </h2>
    </div>
  );
}
