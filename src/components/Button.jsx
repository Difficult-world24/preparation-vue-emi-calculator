import React from "react";

const Button = (props) => {
  const { className } = props;
  return (
    <div
      {...props}
      className={`w-auto h-10 justify-center cursor-pointer gap-1 flex items-center select-none font-semibold tracking-wide text-sm rounded-md p-5 ${className}`}
    >
      {props.children}
    </div>
  );
};

export default Button;
