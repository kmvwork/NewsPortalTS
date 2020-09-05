import React from "react";

type dataItem = {
  dataItem: MainPromoItemProps
};

export type MainPromoItemProps = {
  id: number;
  active: string;
  listTheme: string;
  listTitle: string;
  imgPromo: string;
  promoTheme: string;
  promoTitle: string;
  promoDesc: string;
};

const MainPromoItem = (props: dataItem) => {
  return (
    <div
      key={props.dataItem.id}
      className={`main_promo_item ${
        props.dataItem.active === "true" ? " active_item" : " "
      } `}
    >
      <img src={props.dataItem.imgPromo} alt="" className="main-img" />
      <div className="main_promo_theme bg-lifestyle">{props.dataItem.promoTheme}</div>
      <div className="main_promo_title text-overflow-2">{props.dataItem.promoTitle}</div>
      <div className="main_promo_desc text-overflow-2">{props.dataItem.promoDesc}</div>
      <a href="#" className="main_promo_link">
        READ MORE
      </a>
    </div>
  );
};

export default MainPromoItem;
