import React from "react";

const Layout = ({ children, className: classnames = "" }) => {
  return (
    <div
      className={"max-w-[125rem] mx-auto w-11/12 mt-20 md:mt-10 " + classnames}
    >
      {children}
    </div>
  );
};

export default Layout;
