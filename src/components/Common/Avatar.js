import React from "react";

const Avatar = ({ pfp, className: classnames = "" }) => {
  return (
    <img
      className={"rounded-full " + classnames}
      alt="avatar"
      src={pfp.length > 0 ? pfp : "/assets/default-avatar.jpg"}
    />
  );
};

export default Avatar;
