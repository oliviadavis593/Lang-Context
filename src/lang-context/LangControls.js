import React from "react";
import LanguageContext from "./LanguageContext";

//console.log(LanguageContext) - will show you Language context properties

export default function LangControls(props) {
  return (
    <LanguageContext.Consumer>
      {value => {
        //console.log(value)
        return (
          <>
            <button disabled={value.lang === "en-GB"}>
              British{" "}
              <span role="img" aria-label="en-GB">
                🇬🇧
              </span>
            </button>{" "}
            <button disabled={value.lang === "en-US"}>
              American{" "}
              <span role="img" aria-label="en-US">
                🇺🇸
              </span>
            </button>{" "}
            <button disabled={value.lang === "ko"}>
              Korean{" "}
              <span role="img" aria-label="ko">
                🇰🇷
              </span>
            </button>
          </>
        );
      }}
    </LanguageContext.Consumer>
  );
}

//Step: 7
//Added a LangControls Component that contains buttons to switch to current language

//Step 11:
//Two most important properties: Provider & Consumer
//Used LaunguageContext.Consumer and wrapped around everything
//LLC.C is a component; it has a children prop - which is a function that returns more JSX
//renderProp() is like a mix between callbackProp and a children prop
//We've moved the JSX we want to return into the return from the renderProp

//Step: 12
//To get the valu eo fthe consumer
//We accept it as an argument to the render prop
//We also refactored it to an arrow function to make it more sparing
//In chromeDevTools it's logging the object inside the context
//We have access to the value in the function component

//Step: 13
//We've used this value (step: 12) to disable the active buton
//Removed the conosle.log and made the changed to each button
