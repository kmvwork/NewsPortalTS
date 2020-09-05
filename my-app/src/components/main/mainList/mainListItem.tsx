import React from "react";
import { useState } from "react";
import MainPromoItem from "../mainPromo/mainPromoItem";
import { MainPromoItemProps } from "../mainPromo/mainPromoItem";

type MainListItemProps = {
  elements: any[];
};

type ListItemState = {
  currentElement: MainPromoItemProps;
};

type dataItem = {
  dataItem: ListItemState;
};

const MainListItem = (props: MainListItemProps) => {
  const [state, setState] = useState<ListItemState>({
    currentElement: props.elements[0],
  });

  function showSlides(slideIndex: number) {
    setState({
      currentElement: props.elements.filter(
        (item) => item.id === slideIndex
      )[0],
    });
  }

  const isActive = (id: number): boolean => state.currentElement.id === id;

  return (
    <>
      <div className="main_promo">
        <MainPromoItem dataItem={state.currentElement} />
      </div>
      <div className="main_list">
        {props.elements.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className={`main_list_item ${
                  isActive(item.id) ? "main_list_item-active" : ""
                }`}
                onClick={() => showSlides(item.id)}
              >
                <div className="main_list_item-theme">{item.listTheme}</div>
                <div className="main_list_item-title text-overflow-2">
                  {item.listTitle}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MainListItem;
