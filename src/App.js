import React, { Component } from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SearchResults from "./components/SearchResults/SearchResults";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchHeader />
        <SearchResults />
      </Provider>
    );
  }
}

export default App;
