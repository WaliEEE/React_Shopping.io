import React from "react";

import { withRouter } from "react-router-dom";

import "../menu_items/menu_item.scss";

const Menu = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className={`${size} menu-item pa3 ma3 b--light-violet ba grow`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content grow bg-navy shadow-5 br-pill pointer">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default withRouter(Menu);
