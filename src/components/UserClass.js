import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h2>count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          IncreaseCOunt
        </button>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default UserClass;
