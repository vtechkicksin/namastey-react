import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "default",
        location: "default",
      },
    };
    this.sand = "sandeep";
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");

    // const dataPromise = await fetch(
    //   "https://api.github.com/users/vtechkicksin"
    // );
    // const data = await dataPromise.json();
    // console.log(data);
    // this.setState({
    //   info: data,
    // });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render", this.sand);
    const { name, location } = this.state.info;
    console.log("name", name);
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
