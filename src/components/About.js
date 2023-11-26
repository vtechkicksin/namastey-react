import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About </h1>
        <h2>This is Namastey react series</h2>

        <UserClass name={"first"} />
        <UserClass name={"second"} />
      </div>
    );
  }
}
/*
- parent constructor
- parent render
  - first child constructor
  - first child render

  - second child constructor
  - second child render

  - first child componentDidMount
  - second chile componentDidMount

  - parent componentDidMount
*/

export default About;
