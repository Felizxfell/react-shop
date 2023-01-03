import React from "react";

export default function Button(props) {
  const { type, className, handlerClick, text,  } = props;
  return (
    <button type={type | 'button'} className={className} onClick={handlerClick}>
      {text || props.children }
    </button>
  );
}
