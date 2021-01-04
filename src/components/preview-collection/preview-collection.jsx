import React from "react";
import "./preview-collection.scss";
import "tachyons";

const PreviewCollection = ({ id, name, price, imageUrl }) => (
  <div className="collection-item fl w-25 dim pointer">
    <div
      className="image shadow-5 grow mb3 b--dark-green br3 "
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="f5 ">{name}</span>
      <span className="f5 mr3">${price}</span>
    </div>
  </div>
);

export default PreviewCollection;
