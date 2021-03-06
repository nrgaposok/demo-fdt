// Could possibly refactor to extract the three aspects of the round
// That way they could be used in other places, then again theyre only divs lol
import React, { Component } from "react";

export default class RoundTypeBar extends Component {
  render() {
    const { filter, property, character } = this.props.round;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontSize: 18,
          fontWeight: 500,
          lineHeight: 1.1,

          marginBottom: 5
        }}
      >
        <div> {filter} </div>
        <div> {character} </div>
        <div> {property} </div>
      </div>
    );
  }
}
