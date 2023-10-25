import React from "react";
import KidProduct from "../KidProduct";
import KidsContextProvider from "../../Global/KidsContext";
export default function Kids() {
  return (
    <KidsContextProvider>
      <KidProduct />
    </KidsContextProvider>
  );
}
