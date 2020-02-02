import React, { Component } from "react";
import Child from "./Child";
import LangControls from "./LangControls";

export default class AppLang extends Component {
  render() {
    return (
      <div className="AppLang">
        <LangControls />
        <Child />
      </div>
    );
  }
}

//1st step!
//This is the root of our tree
// we're keeping it separate -
// so you can reference it in isolation in the future

//Step 6:
//To connect all of the tree together
//We imported Child component into our AppLang

//Step: 8
//Imported LangControls into  AppLang
