import React from "react";

export default function Image(props) {
  const { src, alt, className } = props;
  return <img src={src} alt={`image ${alt ?? ''}`} className={className} />;
}
