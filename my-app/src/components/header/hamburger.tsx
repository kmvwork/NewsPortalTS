import React from "react";

type HamburgerProps = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Hamburger = (props: HamburgerProps) => {
  return (
    <div
      className={`hamburger ${props.open ? "hamburger_active" : ""} `}
      onClick={() => props.setOpen(!props.open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
