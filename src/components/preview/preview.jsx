import React from "react";
import PreviewCollection from "../preview-collection/preview-collection";
import "./preview.scss";
import "tachyons";

const PreviewPage = ({ title, items }) => (
  <div className="mt5 ml5 mr5">
    <div>
      <h1>{title}</h1>
      <div className="preview">
        {items.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    </div>
  </div>
);

export default PreviewPage;
