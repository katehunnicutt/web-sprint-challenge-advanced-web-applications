import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axiosWithAuth from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

const bubbleData = () => {
  axiosWithAuth()
  .get("/colors")
  .then(res => {
    setColorList(res.data)
  })
  .catch(err => {
    console.log(err.res, "well?")
  })
}

useEffect(bubbleData, [])

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
