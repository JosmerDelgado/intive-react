import React, { Component } from "react";
import SearchHeader from "./components/SearchHeader";
import { Provider } from "./components/SearchContext";
import SearchResults from "./components/SearchResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      age: "",
      results: [],
      handleNameChange: this.handleNameChange,
      handlePositionChange: this.handlePositionChange,
      handleAgeChange: this.handleAgeChange,
      searchAction: this.searchAction
    };
  }

  getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    return age;
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handlePositionChange = event => {
    this.setState({
      position: event.target.value
    });
  };

  handleAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  };

  searchAction = ddbb => {
    const db = ddbb.players();
    let results;
    let callback;
    if (this.state.position)
      callback = db
        .orderByChild("position")
        .equalTo(this.state.position)
        .once("value");
    else callback = db.orderByChild("name").once("value");
    let myThis = this;
    callback.then(function(snapshot) {
      results = Object.values(snapshot.val());
      console.log(results);
      myThis.setState({
        results: results
      });

      if (myThis.state.name) {
        myThis.setState({
          results: myThis.state.results.filter(result => {
            return result.name.includes(myThis.state.name);
          })
        });
      }

      if (myThis.state.age) {
        myThis.setState({
          results: myThis.state.results.filter(result => {
            return +myThis.state.age === myThis.getAge(result.dateOfBirth);
          })
        });
      }
    });
  };

  render() {
    return (
      <Provider value={this.state}>
        <SearchHeader />

        <SearchResults results={this.state.results} />
      </Provider>
    );
  }
}

export default App;
