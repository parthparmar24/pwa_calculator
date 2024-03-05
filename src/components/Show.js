import React, { Component } from "react";
import "../style/Calculator.css"

class Show extends Component {
  render() {
    return (
      <div id="display" className="display">
        {this.props.display}
      </div>
    );
  }
}

export default Show;
