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
