import React from "react";
import MainListItem from "./mainListItem";

const MainList = () => {
  return (
    <div className="main_list">
      <MainListItem
        listTheme="LIFESTYLE"
        listTitle="Things To Do Before You're 30"
      />

      <MainListItem
        listTheme="SCIENCE"
        listTitle="Value-Based Care‘s Data Problem"
      />

      <MainListItem
        listTheme="TECHNOLOGY"
        listTitle="How to Design for Virtual Reality"
      />

      <MainListItem listTheme="EDUCATION" listTitle="What I Will Fret Over" />
    </div>
  );
};

export default MainList;
