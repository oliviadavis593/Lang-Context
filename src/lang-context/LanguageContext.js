import React from "react";

const LanguageContext = React.createContext({
  lang: window.navigator.language
});

export default LanguageContext;

//Step: 9
//Functionality we want is for the lang to be controlled by the butons & update in the deeply nested GGC comp
// This means we need lang to be the data we control
//React supplies a function called createContext = what we can use to make our context
// We can supply default values as arguments (window.navigator.language)
