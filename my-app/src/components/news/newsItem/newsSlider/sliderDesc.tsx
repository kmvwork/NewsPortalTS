import React from "react";

type SliderDescProps = {
    sliderImg: string,
    sliderTitle: string
}

const SliderDesc = (props: SliderDescProps) => {
  return (
    <div className="slider-desc">
      <img src={props.sliderImg} alt="" className="news_item-img img-cover" />
      <div className="news_item-title title-slider text-overflow-2">
        {props.sliderTitle}
      </div>
    </div>
  );
};

export default SliderDesc;
