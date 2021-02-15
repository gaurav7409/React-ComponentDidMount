import React, { Component } from "react";
import Marks from "./Marks";

export default class Student extends Component {
  render() {
    return (
      <>
        <h1> {this.props.name}</h1>
        <Marks />
      </>
    );
  }
}
