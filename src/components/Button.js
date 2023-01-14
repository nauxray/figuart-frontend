import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({
  text,
  clickHandler,
  className: classnames = "",
  withIcon = false,
  customIcon = <BsArrowRight />,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`bg-lilac cursor-pointer disabled:pointer-events-none py-1 px-2 disabled:bg-[#494150] text-sm md:text-base disabled:border-[#888888] min-w-[7rem] text-black font-medium transition hover:opacity-95 rounded border-2 border-white ${classnames} ${
        withIcon ? "flex justify-between gap-1 items-center" : ""
      }`}
      onClick={clickHandler}
    >
      {text}
      {withIcon && customIcon}
    </button>
  );
};

export default Button;
