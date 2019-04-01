import React from "react";

const SearchRow = props => {
  return (
    <tr>
      <td>{props.player.name}</td>
      <td> {props.player.dateOfBirth}</td>
      <td>{props.player.position}</td>
    </tr>
  );
};

export default SearchRow;
