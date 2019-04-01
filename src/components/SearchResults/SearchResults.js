import React from "react";
import SearchRow from "./SearchRow";
import "./index.css";

const withoutResultMessage = "Select your search criteria";
const titleNameColumn = "Name";
const titleDateOfBirthColumn = "Date Of Birth";
const titlePositionColumn = "Position";
const SearchResults = props => {
  return props.results.length ? (
    <table>
      <tbody>
        <tr>
          <th>{titleNameColumn}</th>
          <th>{titleDateOfBirthColumn}</th>
          <th>{titlePositionColumn}</th>
        </tr>

        {props.results.map((result, key) => (
          <SearchRow key={`s${key}`} player={result} />
        ))}
      </tbody>
    </table>
  ) : (
    <h1> {withoutResultMessage}</h1>
  );
};

export default SearchResults;
