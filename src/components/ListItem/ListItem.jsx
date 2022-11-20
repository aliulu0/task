import React,{useState} from 'react'
import downArrowImg from "../../assets/images/downArrow.png";
import upArrowImg from "../../assets/images/upArrow.png";
import deleteImg from "../../assets/images/delete.png";
import smallUpArrowImg from "../../assets/images/smallUpArrow.png";
import smallDownArrowImg from "../../assets/images/smallDownArrow.png";
import equalImg from "../../assets/images/equal.png";
import { useList } from "../../context/listContext";
import './ListItem.css';

function ListItem({panelItem, index}) {

  const [timer, setTimer] = useState(0);
  const { panelList, setPanelList } = useList();

  const handleUpArray = (arr, oldIndex, newIndex) => {
    const newList = [...arr];
    if (newList) {
      if (oldIndex < 0) {
        oldIndex += newList.length;
      }
      if (newIndex < 0) {
        newIndex += newList.length;
      }
      newList.splice(newIndex, 0, newList.splice(oldIndex, 1)[0]);
    }
    setPanelList(newList);
  };
  const handleDownArray = (arr, oldIndex, newIndex) => {
    const newList = [...arr];
    if (newList) {
      if (newIndex >= newList.length) {
        var k = newIndex - newList.length + 1;
        while (k--) {
          return;
        }
    }
      newList.splice(newIndex, 0, newList.splice(oldIndex, 1)[0]);
    }
    setPanelList(newList);
  };

  const deleteItem = ({ item }) => {
    const newList = panelList.filter(
      (panelItem) => panelItem.item.id !== item.id
    );
    setPanelList(newList);
  };


  return (
    <div className="list-panel">
            <div className="list-panel-timer">
              <span>Gecikme Süresi</span>
              <div className="minus-timer">
                <button
                  className="timer-button"
                  onClick={() => {
                    timer < 10 ? setTimer(0) : setTimer(timer - 10);
                  }}
                >
                  -10
                </button>
                <button
                  className="timer-button"
                  onClick={() => {
                    timer < 1 ? setTimer(0) : setTimer(timer - 1);
                  }}
                >
                  -1
                </button>
              </div>
              <span className="timer-text">
                {timer < 10 ? `0${timer}` : timer} sn{" "}
              </span>
              <div className="plus-timer">
                <button
                  className="timer-button"
                  onClick={() => setTimer(timer + 1)}
                >
                  +1
                </button>
                <button
                  className="timer-button"
                  onClick={() => setTimer(timer + 10)}
                >
                  +10
                </button>
              </div>
            </div>
            <div className="list-panel-item">
              <div className="list-panel-detail">
                <span className="list-panel-text">{panelItem.item.title}</span>
                <img
                  className="list-panel-img"
                  src={panelItem.item.icon}
                  alt=""
                />
                {panelItem.buttonValue === "EV" ? (
                  <div className="list-item">EV</div>
                ) : panelItem.buttonValue === "DIŞ" ? (
                  <div className="list-item">DIŞ</div>
                ) : panelItem.buttonValue === "I" ? (
                  <div className="list-item">I</div>
                ) : panelItem.buttonValue === "O" ? (
                  <div className="list-item">O</div>
                ) : panelItem.buttonValue === "ÇAĞIR" ? (
                  <div className="list-item">ÇAĞIR</div>
                ) : panelItem.item.type === "temperature" ? (
                  <span className="list-item time">
                    {panelItem.temperature.toFixed(1)}
                  </span>
                ) : panelItem.buttonValue === "smallUpArrowImg" ? (
                  <div className="list-item">
                    <img src={smallUpArrowImg} alt="smallUpArrow" />
                  </div>
                ) : panelItem.buttonValue === "equalImg" ? (
                  <div className="list-item">
                    <img src={equalImg} alt="equalImg" />
                  </div>
                ) : panelItem.buttonValue === "smallDownArrowImg" ? (
                  <div className="list-item">
                    <img src={smallDownArrowImg} alt="smallDownArrow" />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="list-panel-right">
                <div className="right-item">
                  <img src={upArrowImg} alt="" onClick={() => handleUpArray(panelList, index, index - 1)}/>
                </div>
                <div className="right-item">
                  <img src={downArrowImg} alt="" onClick={() => handleDownArray(panelList, index, index + 1)} />
                </div>
                <div className="right-item">
                  <img
                    src={deleteImg}
                    alt=""
                    onClick={() => deleteItem(panelItem)}
                  />
                </div>
              </div>
            </div>
          </div>
  )
}

export default ListItem