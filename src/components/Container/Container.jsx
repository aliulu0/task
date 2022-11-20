/* eslint-disable default-case */
import React, { useState } from "react";
import cancelImg from "../../assets/images/cancel.png";
import downloadImg from "../../assets/images/download.png";
import List from "../List/List";
import "./Container.css";
import { data } from "../../data.js";
import Card from "../Card/Card";

function Container() {
  const [dataList, setDataList] = useState(data);

  const sortById = () => {
    let newDataList = [...data];
    newDataList.sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
    setDataList(newDataList);
  };
  const sortByArea = () => {
    let newDataList = [...data];
    newDataList.sort((a, b) => {
      if (a.area > b.area) return 1;
      if (a.area < b.area) return -1;
      return 0;
    });
    setDataList(newDataList);
  };
  const sortBytype = () => {
    let newDataList = [...data];
    newDataList.sort((a, b) => {
      if (a.type > b.type) return 1;
      if (a.type < b.type) return -1;
      return 0;
    });
    setDataList(newDataList);
  };
  const sortByAlphabet = () => {
    let newDataList = [...data];
    newDataList.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
    setDataList(newDataList);
  };


  return (
    <div className="container">
      <div className="control-panel">
        <div className="control-panel-header">
          <div className="control-panel-header-top">
            <input
              type="text"
              className="control-panel-input"
              placeholder="SENERYO İSMİ GİRİNİZ"
            />
            <div className="control-panel-buttons">
              <div>
                <div className="btn cancel-button">
                  <img src={cancelImg} alt="" />
                </div>
                <label>İptal</label>
              </div>
              <div>
                <div className="btn save-button">
                  <img src={downloadImg} alt="" />
                </div>
                <label>Kaydet</label>
              </div>
            </div>
          </div>
          <div className="control-panel-header-bottom">
            <div className="control-panel-header-bottom-radius">
              <label htmlFor="hepsi" name="sort">
                Hepsi
              </label>
              <input defaultChecked type="radio" id="hepsi" name="sort"
                onClick={() => sortById()}
              />
            </div>
            <div className="control-panel-header-bottom-radius">
              <label htmlFor="alan" name="sort">
                Alan
              </label>
              <input
                type="radio"
                id="alan"
                name="sort"
                onClick={() => sortByArea()}
              />
            </div>
            <div className="control-panel-header-bottom-radius">
              <label htmlFor="tip" name="sort">
                Tip
              </label>
              <input
                type="radio"
                id="tip"
                name="sort"
                onClick={() => sortBytype()}
              />
            </div>
            <div className="control-panel-header-bottom-radius">
              <label htmlFor="a_z" name="sort">
                a-z
              </label>
              <input
                type="radio"
                id="a-z"
                name="sort"
                onClick={() => sortByAlphabet()}
              />
            </div>
          </div>
        </div>
        <div className="control-panel-body">
          <div className="control-panel-body-height">
          {dataList.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
          </div>
        </div>
      </div>
      
      {/* Panel Listeleme */}
      <List />
    </div>
  );
}

export default Container;
