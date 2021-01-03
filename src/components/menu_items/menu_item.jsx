import React from "react";

import "../menu_items/menu_item.scss";

const Menu = ({ title, image, size }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className={` ${size} menu-item pa3 ma3 b--light-purple ba grow`}
  >
    <div className="content grow bg-navy shadow-5 br-pill pointer">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default Menu;
