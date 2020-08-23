import React from "react";

type MainListItemProps = {
    listTheme: string,
    listTitle: string
}

const MainListItem = (props: MainListItemProps) => {
  return (
    <div className="main_list_item">
      <div className="main_list_item-theme">{props.listTheme}</div>
      <div className="main_list_item-title text-overflow-2">
        {props.listTitle}
      </div>
    </div>
  )
}

export default MainListItem;

