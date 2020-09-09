import React from "react";
import { useState } from "react";

type itemSliderDataProps = {
  itemSliderData: any[];
};

type stateSlideProps = {
  currentSlide: currentSlideProps;
};

type currentSlideProps = {
  id: number;
  img: string;
  title: string;
};

const SliderDesc = (props: itemSliderDataProps) => {
  const [state, setState] = useState<stateSlideProps>({
    currentSlide: props.itemSliderData[0],
  });

  const showSlidesNews = (slideIndex: number) => {
    setState({
      currentSlide: props.itemSliderData.filter(
        (item) => item.id === slideIndex
      )[0],
    });
  }

  const isActive = (id: number): boolean => state.currentSlide.id === id;
  
  return (
    <>
      <div className="slider-desc" key={state.currentSlide.id}>
        <img
          src={state.currentSlide.img}
          alt=""
          className={`news_item-img img-cover ${
			isActive(state.currentSlide.id) ? "active-slide" : ""
		  }`}
        />
        <div className="news_item-title title-slider text-overflow-2">
          {state.currentSlide.title}
        </div>
      </div>
      <div className="slider-dots">
        {props.itemSliderData.map((item) => {
          return (
            <>
              <span className="slider-dots-item" key={item.id}
			  		onClick = { () => showSlidesNews(item.id)}
			  ></span>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SliderDesc;
