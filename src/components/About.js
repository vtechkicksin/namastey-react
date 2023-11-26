import User from "./User";
import UserClass from "./UserClass";
import UserFunc from "./UserFunc";
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

        <UserClass name="first" />
        <UserClass name="second" />
        <UserFunc name="third" />
        <UserFunc name="fourth" />
      </div>
    );
  }
}
/**
 * parent constructor
 * About.js:15 parent render
 * UserClass.js:10 first child constructor
 * UserClass.js:16 first child render
 * UserClass.js:10 second child constructor
 * UserClass.js:16 second child render
 * UserFunc.js:10 Render third function Component
 * UserFunc.js:10 Render fourth function Component
 * UserClass.js:13 first child componentDidMount
 * UserClass.js:13 second child componentDidMount
 * About.js:12 parent componentDidMount
 * UserFunc.js:7 useEffect call third componentDidMount
 * UserFunc.js:7 useEffect call fourth componentDidMount
 */
export default About;
