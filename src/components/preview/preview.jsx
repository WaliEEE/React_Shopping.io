import React from "react";
import PreviewCollection from "../preview-collection/preview-collection";
import "./preview.scss";
import "tachyons";

const PreviewPage = ({ title, items }) => (
  <div className="mt5 ml5 mr5">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
    </div>
  </div>
);

export default PreviewPage;
