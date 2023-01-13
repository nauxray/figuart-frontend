import React from "react";

const Layout = ({ children, className: classnames }) => {
  return (
    <div className={"max-w-[125rem] mx-auto " + classnames ?? ""}>
      {children}
    </div>
  );
};

export default Layout;
