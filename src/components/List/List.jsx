/* eslint-disable array-callback-return */
import React from "react";
import "./List.css";
import { useList } from "../../context/listContext";
import ListItem from "../ListItem/ListItem";

function List() {
  const { panelList } = useList();

  return (
    <div className="list-container">
      <div className="header">Kontrol Listesi</div>
      <div className="list-item-container">
        {panelList.map((panelItem, index) => (
          <ListItem key={index} index={index} panelItem={panelItem}/>
        ))}
      </div>
    </div>
  );
}

export default List;
