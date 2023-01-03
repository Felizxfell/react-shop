import React from "react";

export default function Label(props) {
  const { htmlFor, className, text } = props;
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {text}
    </label>
  );
}
