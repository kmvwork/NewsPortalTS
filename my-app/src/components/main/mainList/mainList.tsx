import React from "react";
import MainListItem from "./mainListItem";



const mainListItemData:any[] = [
  {
    id : '1',
    active : "true",
    listTheme : "LIFESTYLE",
    listTitle : "Things To Do Before You're 30",
  },
  {
    id : '2',
    active : "false",
    listTheme : "SCIENCE",
    listTitle : "Value-Based Care‘s Data Problem"
  },
  {
    id : '3',
    active : "false",
    listTheme : "TECHNOLOGY",
    listTitle : "How to Design for Virtual Reality"
  },
  {
    id : '4', 
    active :  "false",
    listTheme : "EDUCATION", 
    listTitle : "What I Will Fret Over"
  }
]

const MainList = () => {
  return (
    <div className="main_list">
      <MainListItem
          elements = {mainListItemData}
      />
    </div>
  );
};

export default MainList;
