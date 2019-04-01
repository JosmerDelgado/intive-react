import React from "react";

const SearchContext = React.createContext({
  name: "Josmer",
  position: "",
  age: "28",
  handleNameChange() {},
  handlePositionChange() {},
  handleAgeChange() {},
  searchAction(ddbb) {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
