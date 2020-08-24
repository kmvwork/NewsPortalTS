import React from "react";
import GroupBtn from "./groupBtn";

type NewsItemProps = {
  itemImg: string;
  itemTheme: string;
  itemTitle: string;
  itemDesc: string;
};

const NewsItem = (props: NewsItemProps) => {
  return (
    <div className="news_item">
      <img
        src={props.itemImg}
        alt=""
        className="news_item-img"
      />
      <div className="news_item-theme">
        <span className="news_item-theme-text bg-country">
          {props.itemTheme}
        </span>
      </div>
      <div className="news_item-text">
        <div className="news_item-title text-overflow-2">{props.itemTitle}</div>
        <div className="news_item-desc text-overflow-2">{props.itemDesc}</div>
      </div>
      <hr />

      <GroupBtn sliderClass=""/>

    </div>
  );
};

export default NewsItem;
