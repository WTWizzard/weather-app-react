import React from "react";
import sun from "../assets/images/clear.svg";

export const Loader = () => (
  <div className="loader__container">
    <img
      width={300}
      height={300}
      className="loader__image"
      src={sun}
      alt="Loader"
    />
  </div>
);
