import React from "react";
import SliderDesc from "./sliderDesc";
import GroupBtn from "../groupBtn";

type NewsItemSliderProps = {
  itemTheme: string;
};

const itemSliderData = [
  {
    id: 1,
    img:
      "https://www.wallpaperflare.com/static/1003/753/108/cliffs-manarola-cinque-terre-santorini-wallpaper.jpg",
    title: "10 Caring for plants in the courtyard house",
  },
  {
    id: 2,
    img:
      "https://www.ot.kg/files/images/catalog/catalog_53f7357088b14124e05a9edc40e55be7.jpg",
    title: "Guest house for movie lovers",
  },
  {
    id: 3,
    img:
      "https://www.nastol.com.ua/download.php?img=201204/1920x1200/nastol.com.ua-20501.jpg",
    title: "Nest house in a nature reserve in Namibia",
  },
  {
    id: 4,
    img:
      "https://www.nastol.com.ua/download.php?img=201203/1920x1080/nastol.com.ua-18319.jpg",
    title: "The apartment is on the ground floor in Taipei",
  },
];

const NewsItemSlider = (props: NewsItemSliderProps) => {
  return (
    <>
      <div className="news_item news_item-slider">
        <div className="news_item-theme">
          <span className="news_item-theme-text bg-home">
            {props.itemTheme}
          </span>
        </div>

        <SliderDesc itemSliderData={itemSliderData} />
        <hr className="hidden" />

        <GroupBtn sliderClass="slider-link" />
      </div>
    </>
  );
};

export default NewsItemSlider;
