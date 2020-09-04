import React from "react";

type elementsProps = {
  elements: any[];
};

const MainPromoItem = (props: elementsProps) => {
  return (
    <>
      {props.elements.map((item) => {
        return (
          <div key={item.id} className={`main_promo_item ${ item.active === "true" ? " active_item" : " "  } `}>
          <img src={item.imgPromo} alt="" className="main-img" />
          <div className="main_promo_theme bg-lifestyle">
            {item.promoTheme}
          </div>
          <div className="main_promo_title text-overflow-2">
            {item.promoTitle}
          </div>
          <div className="main_promo_desc text-overflow-2">
            {item.promoDesc}
          </div>
          <a href="#" className="main_promo_link">
            READ MORE
          </a>
        </div>
        )
      })}
    </>
  );
};

export default MainPromoItem;
