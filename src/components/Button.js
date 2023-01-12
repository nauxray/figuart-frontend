import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({
  text,
  clickHandler,
  className: classnames = "",
  withArrow = false,
}) => {
  return (
    <button
      className={`bg-lilac cursor-pointer py-1 px-2 text-sm md:text-base min-w-[7rem] text-black font-medium transition hover:opacity-95 rounded border-2 border-white ${classnames} ${
        withArrow ? "flex justify-between gap-1 items-center" : ""
      }`}
      onClick={clickHandler}
    >
      {text}
      {withArrow && <BsArrowRight />}
    </button>
  );
};

export default Button;
