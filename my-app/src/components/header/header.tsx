import React from "react";
import { useState } from "react";
import Hamburger from "./hamburger";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Lifestyle from "../page/lifestyle";
import Science from "../page/science";
import Technology from "../page/technology";
import Education from "../page/education";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  return (
    <Router>
      <header className="header container d-flex">
        <div className="logo">
          <a className="logo_link" href="#">
            Media
          </a>
        </div>

        <ul className={`menu ${open ? "menu_active" : ""}`}>
          <li className="menu_item" onClick={() => close()}>
            <Link to="/LIFESTYLE" className="menu_link active_link">
              LIFESTYLE
            </Link>
          </li>
          <li className="menu_item" onClick={() => close()}>
            <Link to="/SCIENCE" className="menu_link">
              SCIENCE
            </Link>
          </li>
          <li className="menu_item" onClick={() => close()}>
            <Link to="/TECHNOLOGY" className="menu_link">
              TECHNOLOGY
            </Link>
          </li>
          <li className="menu_item" onClick={() => close()}>
            <Link to="/EDUCATION" className="menu_link">
              EDUCATION
            </Link>
          </li>
        </ul>
        <Hamburger open={open} setOpen={setOpen} />

        <Switch>
          <Route path="/LIFESTYLE">
            <Lifestyle />
          </Route>
          <Route path="/SCIENCE">
            <Science />
          </Route>
          <Route path="/TECHNOLOGY">
            <Technology />
          </Route>
          <Route path="/EDUCATION">
            <Education />
          </Route>
        </Switch>
      </header>
    </Router>
  );
};

export default Header;
