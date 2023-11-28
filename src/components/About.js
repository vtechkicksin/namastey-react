import User from "./User";
import UserClass from "./UserClass";
import UserFunc from "./UserFunc";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About </h1>
        <h2>This is Namastey react series</h2>

        <UserClass name="first" />
      </div>
    );
  }
}

export default About;
