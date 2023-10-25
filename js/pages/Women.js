import React from "react";
import WomenContextProvider from "../../Global/WomenContext";
import WomenProduct from "../WomenProduct";
export default function women() {
  return (
    <div>
      <WomenContextProvider>
        <WomenProduct />
      </WomenContextProvider>
    </div>
  );
}
