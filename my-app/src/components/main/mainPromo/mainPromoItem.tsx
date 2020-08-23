import React from "react";

const MainPromoItem = (props) => {
  <div className="main_promo_item">
    <img src={props.imgpromo} alt="" className="main-img" />
<div className="main_promo_theme bg-lifestyle">{props.promoTheme}</div>
    <div className="main_promo_title text-overflow-2">
      Things To Do Before You're 30
    </div>
    <div className="main_promo_desc text-overflow-2">
      For many it means that you’re no longer in the hard-partying, bad
      decision-making stage of your life, for better or for worse.
    </div>
    <a href="#" className="main_promo_link">
      READ MORE
    </a>
  </div>;
};

export default MainPromoItem;
