import React from "react";

export default function (props) {
  const { type, id, placeholder, className, defaultvalue } = props;
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`input ${className}`}
      defaultValue={defaultvalue}
    />
  );
}
