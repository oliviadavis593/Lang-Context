import React, { Component } from "react";
import languageSpecifyCopy from "./languageSpecifyCopy";
import LanguageContext from "./LanguageContext";

class GreatGrandChild extends Component {
  static contextType = LanguageContext;
  render() {
    // step 10 changed: const copy = languageSpecifyCopy["en-US"] || {} to:
    const copy = languageSpecifyCopy[this.context.lang] || {};
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    );
  }
}

export default GreatGrandChild;

//Step 4:
//GGC will render some text in the currently selected language
//We're using languageSpecifyCopy object & hardcogin a selection for 'en-US'
//We're using an 'or an empty object' logic when creating copy constant with syntax || {}
//Simliart to defaultProps but lSC isn't a prop - so we can't use defaultProps
//Meaning if we attempt to select a key inside the lSC object that doesn't exist = it could return undefined
//If copy === undefined - then when we attempt to do copy.title & copy.body = our app could throw errors
// The || {} is giving us a safety net - to avoid dealing with undefined & instead use an empty object in the worst case
//{}.title & {}.body won't throw errors if the key doesn't exist in lSC

//Step: 10
//We refactored GGC comp to use the language from context
//Also update the LangControls component to disable button that's currently active
//We assigned our context to a static property called contextType = will give us a new instance property called this.context
//React DevTool = GGC - new property listed (context) - an object with a key (lang)
//We swapped the hardcoded string of 'en-US inside render for this value inside context
