import React from "react";


type ItemAccordionProps = {
    id: number,
    checked: string | boolean,
    accTheme: string,
    accTitle: string,
    accText: string,
    accImg: string
}

const ItemAccordion = (props: ItemAccordionProps) => {
  return (
    <div className="accordion-item">
      <input
        className="accordion-item-input"
        type="radio"
        name="accordion"
        id= {`accordion-${props.id}`}
        checked = {`${props.checked} === "true" ? "true" : "false"`}
      />
      <label className="accordion-item-trigger" htmlFor={`accordion-${props.id}`}>
  <span className="accordion-theme">{props.accTheme}</span>
        <p className="accordion-title overflow">
          {props.accTitle}
        </p>
        <i className="arrow right"></i>
      </label>
      <div className=" accordion-item-open">
        <p className="accordion-text text-overflow-5">
          {props.accText}
          
        </p>
        <img src={props.accImg} alt="" className="accordion-img" />
      </div>
    </div>
  );
};

export default ItemAccordion;
