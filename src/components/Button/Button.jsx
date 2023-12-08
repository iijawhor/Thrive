import React from "react";

function Button({
  children,
  type = "button",
  name = "",
  bgColor = "blue",
  ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg  ${bgColor}`} {...props}>
      {children}
      {name}
    </button>
  );
}

export default Button;
