import React from "react";

const SearchContext = React.createContext({
  name: "",
  position: "",
  age: ""
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
