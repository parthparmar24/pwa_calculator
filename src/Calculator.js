import React, { Component } from "react";
import { connect } from "react-redux";
import Show from "./components/Show";
import Keys from "./components/Keys";
import { getDisplay } from "./selectors/Selectors";
import "./style/Calculator.css";

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div>
          <Show display={this.props.display} />
        </div>
        <div>
          <Keys display={this.props.display} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const displayValue = getDisplay(state);
  return {
    display: displayValue,
  };
};

export default connect(mapStateToProps, null)(Calculator);
