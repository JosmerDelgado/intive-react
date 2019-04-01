import React from "react";
import "./index.css";
class SearchResults extends React.Component {
  render() {
    return this.props.results.length ? (
      <table>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Position</th>
        </tr>
        {this.props.results.map(result => (
          <tr>
            <td>{result.name}</td>
            <td> {result.dateOfBirth}</td>
            <td>{result.position}</td>
          </tr>
        ))}
      </table>
    ) : (
      <h1> Select your search criteria</h1>
    );
  }
}

export default SearchResults;
