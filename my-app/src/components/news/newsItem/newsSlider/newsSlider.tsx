import React from "react";
import SliderDesc from "./sliderDesc";
import SliderDots from "./sliderDots";
import GroupBtn from "../groupBtn";

type NewsItemSlider = {
    itemTheme: string
} 

const NewsItemSlider = (props: NewsItemSlider) => {
  return (
    <>
      <div className="news_item news_item-slider">
        <div className="news_item-theme">
        <span className="news_item-theme-text bg-home">{props.itemTheme}</span>
      </div>

        <SliderDesc
          sliderImg="https://www.wallpaperflare.com/static/1003/753/108/cliffs-manarola-cinque-terre-santorini-wallpaper.jpg"
          sliderTitle="10 Caring for plants in the courtyard house"
        />
        <SliderDesc
          sliderImg="https://www.ot.kg/files/images/catalog/catalog_53f7357088b14124e05a9edc40e55be7.jpg"
          sliderTitle="Guest house for movie lovers"
        />
        <SliderDesc
          sliderImg="https://www.nastol.com.ua/download.php?img=201204/1920x1200/nastol.com.ua-20501.jpg"
          sliderTitle=" Nest house in a nature reserve in Namibia"
        />
        <SliderDesc
          sliderImg="https://www.nastol.com.ua/download.php?img=201203/1920x1080/nastol.com.ua-18319.jpg"
          sliderTitle="The apartment is on the ground floor in Taipei"
        />

        <SliderDots />

        <hr className="hidden" />

        <GroupBtn sliderClass = "slider-link"/>

      </div>
    </>
  );
};

export default NewsItemSlider;
