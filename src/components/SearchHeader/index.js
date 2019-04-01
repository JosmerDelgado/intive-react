import React from "react";
import "./index.css";
import { FirebaseContext } from "../Firebase";
import { Consumer } from "../SearchContext";

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

class SearchHeader extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <React.Fragment>
            <h1> Football Player Finder</h1>

            <input
              value={context.name}
              placeholder="Player Name"
              onChange={context.handleNameChange}
            />
            <select onChange={context.handlePositionChange}>
              <option value="">Position</option>
              {positionArray.map(position => (
                <option value={position}>{position}</option>
              ))}
            </select>
            <input
              placeholder="Age"
              type="number"
              min="18"
              max="40"
              value={context.age}
              onChange={context.handleAgeChange}
            />
            <FirebaseContext.Consumer>
              {firebase => {
                return (
                  <button onClick={() => context.searchAction(firebase)}>
                    Search
                  </button>
                );
              }}
            </FirebaseContext.Consumer>
          </React.Fragment>
        )}
      </Consumer>
    );
  }
}

export default SearchHeader;
