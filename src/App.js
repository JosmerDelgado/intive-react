import React, { Component } from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import { Provider } from "./components/SearchContext/SearchContext";
import SearchResults from "./components/SearchResults/SearchResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      age: "",
      results: []
    };
  }

  getAge = date => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let deltaMonth = today.getMonth() - birthDate.getMonth();
    if (
      deltaMonth < 0 ||
      (deltaMonth === 0 && today.getDate() < birthDate.getDate())
    ) {
      age = age - 1;
    }
    return age;
  };

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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  searchAction = dataBase => {
    const playerDataBase = dataBase.players();
    let results;
    let callback;
    if (this.state.position) {
      callback = playerDataBase
        .orderByChild("position")
        .equalTo(this.state.position)
        .once("value");
    } else {
      callback = playerDataBase.orderByChild("name").once("value");
    }
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
        <SearchHeader
          changeHandler={this.handleChange}
          searchAction={this.searchAction}
        />
        <SearchResults results={this.state.results} />
      </Provider>
    );
  }
}

export default App;
