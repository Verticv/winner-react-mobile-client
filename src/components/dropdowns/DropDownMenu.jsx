import React from "react";
import DropDownContainer from "./DropDownContainer";

export default function DropDownMenu({ children }) {
  return (
    <DropDownContainer>
      {children}
    </DropDownContainer>
  );
}
