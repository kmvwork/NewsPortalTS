import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';


// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


type ItemAccordionProps = {
    id: string,
    accTheme: string,
    accTitle: string,
    accText: string,
    accImg: string
}

const ItemAccordion = (props: ItemAccordionProps) => {
  return (
//     <div className="accordion-item">
//       <input
//         className="accordion-item-input"
//         type="radio"
//         name="accordion"
//         id= {`accordion-${props.id}`}
//         checked = {props.checked}
//       />
//       <label className="accordion-item-trigger" htmlFor={`accordion-${props.id}`}>
//   <span className="accordion-theme">{props.accTheme}</span>
//         <p className="accordion-title overflow">
//           {props.accTitle}
//         </p>
//         <i className="arrow right"></i>
//       </label>
//       <div className=" accordion-item-open">
//         <p className="accordion-text text-overflow-5">
//           {props.accText}
          
//         </p>
//         <img src={props.accImg} alt="" className="accordion-img" />
//       </div>
//     </div>


<AccordionItem uuid={props.id}>
    <AccordionItemHeading className="accordion-item">
        <AccordionItemButton className="accordion-item-trigger">
            <span className="accordion-theme">{props.accTheme}</span>
            <p className="accordion-title overflow">{props.accTitle}</p>
        </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel className="accordion-item-open">
        <p className="accordion-text text-overflow-2">{props.accText}</p>
        <img src={props.accImg} alt="" className="accordion-img" />
    </AccordionItemPanel>
</AccordionItem>

  );
};

export default ItemAccordion;
