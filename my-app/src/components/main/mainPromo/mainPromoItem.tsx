import React from "react";

type MainPromoProps = {
  imgPromo: string;
  promoTitle: string;
  promoTheme: string;
  promoDesc: string;
};

const MainPromoItem = (props: MainPromoProps) => {
  return (
    <div className="main_promo_item">
      <img src={`../../../img/${props.imgPromo}`} alt="" className="main-img" />
      <div className="main_promo_theme bg-lifestyle">{props.promoTheme}</div>
      <div className="main_promo_title text-overflow-2">{props.promoTitle}</div>
      <div className="main_promo_desc text-overflow-2">{props.promoDesc}</div>
      <a href="#" className="main_promo_link">
        READ MORE
      </a>
    </div>
  );
};

export default MainPromoItem;
