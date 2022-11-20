import bellImg from "./assets/images/bell.png";
import thermImg from "./assets/images/thermometer.png";
import valveImg from "./assets/images/valve.png";
import lightImg from "./assets/images/light.png";
import garageImg from "./assets/images/garage.png";
import curtainImg from "./assets/images/curtain.png";

export const data = [
  {
    id:0,
    title: "Alarm",
    icon: bellImg,
    type: "alarm",
    area: "livingRoom",
  },
  {
    id:1,
    title: "Kombi",
    icon: thermImg,
    type: "temperature",
    area: "kitchen",
  },
  {
    id:2,
    title: "Lamba1",
    icon: lightImg,
    type: "on-off",
    area: "livingRoom",
  },
  {
    id:3,
    title: "Valve",
    icon: valveImg,
    type: "on-off",
    area: "bathroom",
  },
  {
    id:4,
    title: "Panel Kombi",
    icon: thermImg,
    type: "temperature",
    area: "kitchen",
  },
  {
    id:5,
    title: "Garage",
    icon: garageImg,
    type: "garage",
    area: "garage",
  },
  {
    id:6,
    title: "Perde1",
    icon: curtainImg,
    type: "curtain",
    area: "bedroom",
  },
  {
    id:7,
    title: "Perde2",
    icon: curtainImg,
    type: "curtain",
    area: "bedroom",
  },
  {
    id:8,
    title: "Perde3",
    icon: curtainImg,
    type: "curtain",
    area: "bedroom",
  },
];
