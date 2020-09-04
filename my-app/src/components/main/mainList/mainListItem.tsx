import React from "react";
import {useState} from 'react';


type elementsProps = {
  elements: any[];
};

const MainListItem = (props: elementsProps) => {
  


  function showSlides(slideIndex: number) {
    console.log(slideIndex);
  }


  return (
    <>
      {props.elements.map((item) => {
        return (
          <div key = {item.id} className={`main_list_item ${item.active === "true" ? "main_list_item-active" : ""}`} 
                onClick={() => showSlides(item.id)}>
            <div className="main_list_item-theme">{item.listTheme}</div>
            <div className="main_list_item-title text-overflow-2">
              {item.listTitle}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MainListItem;
