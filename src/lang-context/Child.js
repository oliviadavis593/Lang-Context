import React from "react";
import GrandChild from "./GrandChild";

export default function Child() {
  return (
    <main role="main" className="Child">
      <GrandChild />
    </main>
  );
}

//Step 6:
//Created Child that takes in GrandChild
//Inside GrandChild lives GreatGrandChild
