import React from "react";
import MenProduct from "../MenProduct";
import MenContextProvider from "../../Global/ProductContext";
export default function Men() {
  return (
    <MenContextProvider>
      <MenProduct />
    </MenContextProvider>
  );
}
