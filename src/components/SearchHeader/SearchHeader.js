import React from "react";
import "./index.css";
import { FirebaseContext } from "../Firebase";
import { connect } from "react-redux";
import changeName from "../../actionCreators/changeName";
import changePosition from "../../actionCreators/changePosition";
import changeAge from "../../actionCreators/changeAge";
import searchAction from "../../actionCreators/searchAction";

const positionArray = [
  "Attacking Midfield",
  "Central Midfield",
  "Centre-Back",
  "Centre-Forward",
  "Defensive Midfield",
  "Keeper",
  "Left Midfield",
  "Left Wing",
  "Left-Back",
  "Right-Back"
];

const topTitle = "Football Player Finder";

const SearchHeader = props => {
  return (
    <React.Fragment>
      <h1> {topTitle}</h1>

      <input
        value={props.name}
        name="name"
        placeholder="Player Name"
        onChange={props.handleNameChange}
      />
      <select
        onChange={props.handlePositionChange}
        value={props.position}
        name="position"
      >
        <option value="">Position</option>
        {positionArray.map((position, key) => (
          <option key={`sl${key}`} value={position}>
            {position}
          </option>
        ))}
      </select>
      <input
        placeholder="Age"
        type="number"
        min="18"
        max="40"
        name="age"
        value={props.age}
        onChange={props.handleAgeChange}
      />
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <button onClick={() => props.searchAction(firebase)}>Search</button>
          );
        }}
      </FirebaseContext.Consumer>
    </React.Fragment>
  );
};

const mapStateToProps = ({ position, name, age }) => ({ position, name, age });

const mapDispatchToProps = dispatch => ({
  handleNameChange(event) {
    dispatch(changeName(event.target.value));
  },
  handlePositionChange(event) {
    dispatch(changePosition(event.target.value));
  },
  handleAgeChange(event) {
    dispatch(changeAge(event.target.value));
  },
  searchAction(database) {
    dispatch(searchAction(database));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchHeader);
