import React from "react";
import Hamburger from "./components/header/hamburger";
import Main from "./components/main/main";
import News from "./components/news/news";
import Load from "./components/load/load";
import Footer from "./components/footer/footer";

import Lifestyle from "./components/page/lifestyle";
import Science from "./components/page/science";
import Technology from "./components/page/technology";
import Education from "./components/page/education";

import "./App.scss";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink  } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  // const [active, setActive] = useState<boolean>(false)
  // const onActive = (n:boolean):void => {
  //   setActive({
  //      active =  true;
  //   })
  // }

  return (
    <Router>
      <header className="header container d-flex">
        <div className="logo">
          <NavLink className="logo_link" to="/">
            Media
          </NavLink>
        </div>
        <ul className={`menu ${open ? "menu_active" : ""}`}>
          <li className="menu_item" onClick={() => close()}>
            <NavLink to="/LIFESTYLE" activeClassName='active_link' className="menu_link">
              LIFESTYLE
            </NavLink>
          </li>
          <li className="menu_item" onClick={() => close()}>
            <NavLink to="/SCIENCE" activeClassName='active_link' className="menu_link">
              SCIENCE
            </NavLink>
          </li>
          <li className="menu_item" onClick={() => close()}>
            <NavLink to="/TECHNOLOGY" activeClassName='active_link' className="menu_link">
              TECHNOLOGY
            </NavLink>
          </li>
          <li className="menu_item" onClick={() => close()}>
            <NavLink to="/EDUCATION" activeClassName='active_link' className="menu_link">
              EDUCATION
            </NavLink>
          </li>
        </ul>
        <Hamburger open={open} setOpen={setOpen} />
      </header>

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
        <Route path="/">
          <Main />
          <News />
        </Route>
      </Switch>

      <Load />
      <Footer />
    </Router>
  );
};

export default App;
