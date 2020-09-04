import React from "react";

import MainPromo from "./mainPromo/mainPromo";
import MainList from "./mainList/mainList";
import Img from '../../img/bg_main.jpg'

const Main = () => {

  
// /* Индекс слайда по умолчанию */
// let slideIndex = 1;
// showSlides(slideIndex);

// /* Устанавливает текущий слайд */
// function currentSlide(n:number) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(slideIndex:number) {
//     const slides = document.querySelectorAll<HTMLElement>(".main_promo_item");
//     const dots = document.querySelectorAll<HTMLElement>(".main_list_item");
    
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" main_list_item-active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " main_list_item-active";
// }


// const dots = document.querySelectorAll(".main_list_item");
// dots.forEach((item, index) => item.addEventListener('click', () => {
//     currentSlide(index + 1) 
// }))



  return (
    <div className="main container">
      <MainPromo />
      <MainList />
    </div>
  );
};

export default Main;
