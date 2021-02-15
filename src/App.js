import React from "react";
import Student from "./Student.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor method call");
    this.state = {
      rollno: "101"
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("get Derived State From Props");
    console.log(props, state);
    return null;
  }

  componentDidMount() {
    //Get data from server and set to state
    console.log("componentDidMount call here");
    // This method calls after DOM rendered
  }

  render() {
    console.log("App rendered");
    return (
      <>
        <h1>hellow </h1>
        <Student name="gaurav" />
      </>
    );
  }
}

export default App;
