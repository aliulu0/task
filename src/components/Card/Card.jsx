/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import minusImg from "../../assets/images/minus.png";
import plusImg from "../../assets/images/plus.png";
import smallUpArrowImg from "../../assets/images/smallUpArrow.png";
import smallDownArrowImg from "../../assets/images/smallDownArrow.png";
import equalImg from "../../assets/images/equal.png";

import "./Card.css";

import { useList } from "../../context/listContext";

function Card({ item }) {
  const [temperature, setTemperature] = useState(25);
  const [buttonValue, setButtonValue] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const { setPanelList } = useList();

  const handleAddItem = () => {
    if (buttonValue !== undefined && buttonValue !== "") {
      setPanelList((prevItem) => [
        ...prevItem,
        { item, buttonValue, temperature },
      ]);
    }
  };
  const handleMinusTemperature = (e) => {
    setTemperature(temperature - 0.5);
    setButtonValue(e.target.value);
  };
  const handlePlusTemperature = (e) => {
    setTemperature(temperature + 0.5);
    setButtonValue(e.target.value);
  };
  const handleClickButton = (e) => {
    setButtonValue(e.target.value);
    setIsFocus(!isFocus);
    e.target.classList.toggle("button-focus")
  };

  return (
    <div key={item.id} className="control-panel-body-row">
      <div className="row">
        <div className="row-detail">
          <span>{item.title}</span>
          <img src={item.icon} alt="" />
        </div>

        {/* {dataTypes(item)} */}

        {item.type === "alarm" ? (
          <div className="control-type">
            <input
              type="button"
              name="ev"
              value="EV"
              className="control-type-button"
              onClick={handleClickButton}
            />
            <input
              type="button"
              name="dis"
              value="DIŞ"
              className="control-type-button"
              onClick={handleClickButton}
            />
          </div>
        ) : item.type === "temperature" ? (
          <div className="control-type">
            <input
              className="control-type-button"
              type="image"
              value={temperature}
              src={minusImg}
              onClick={handleMinusTemperature}
              width="20px"
              height="20px"
            />
            <input
              type="button"
              className="control-type-value"
              name="temperature"
              value={temperature.toFixed(1)}
            />
            <input
              className="control-type-button"
              type="image"
              value={temperature}
              src={plusImg}
              onClick={handlePlusTemperature}
            />
          </div>
        ) : item.type === "on-off" ? (
          <div className="control-type">
            <input
              type="button"
              value="I"
              name="i"
              className="control-type-button"
              onClick={handleClickButton}
            />
            <input
              type="button"
              value="O"
              name="o"
              className="control-type-button"
              onClick={handleClickButton}
            />
          </div>
        ) : item.type === "garage" ? (
          <div className="control-type">
            <input
              type="button"
              value="ÇAĞIR"
              name="cagir"
              className="control-type-button"
              onClick={handleClickButton}
            />
          </div>
        ) : item.type === "curtain" ? (
          <div className="control-type">
            <input
              className="control-type-button"
              type="image"
              value="smallUpArrowImg"
              src={smallUpArrowImg}
              onClick={handleClickButton}
            />
            <input
              className="control-type-button"
              type="image"
              value="equalImg"
              src={equalImg}
              onClick={handleClickButton}
            />
            <input
              className="control-type-button"
              type="image"
              value="smallDownArrowImg"
              src={smallDownArrowImg}
              onClick={handleClickButton}
            />
          </div>
        ) : (
          <div></div>
        )}

        <button type="submit" className="add-button" onClick={handleAddItem}>
          EKLE
        </button>
      </div>
    </div>
  );
}

export default Card;
