import React from "react";
import "./index.css";
import { FirebaseContext } from "../Firebase";
import { Consumer } from "../SearchContext/SearchContext";

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
    <Consumer>
      {context => (
        <React.Fragment>
          <h1> {topTitle}</h1>

          <input
            value={context.name}
            name="name"
            placeholder="Player Name"
            onChange={props.changeHandler}
          />
          <select
            onChange={props.changeHandler}
            value={context.position}
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
            value={context.age}
            onChange={props.changeHandler}
          />
          <FirebaseContext.Consumer>
            {firebase => {
              return (
                <button onClick={() => props.searchAction(firebase)}>
                  Search
                </button>
              );
            }}
          </FirebaseContext.Consumer>
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default SearchHeader;
