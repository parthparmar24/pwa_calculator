import React, { Component } from "react";
import { connect } from "react-redux";
import { division } from "../actions/actions";
import { updateContent } from "../actions/actions";
import "../style/Calculator.css"

class Divide extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.id === "divide") {
      this.props.divide(this.props.button)
    }else {
      this.props.updateContent(this.props.button);
    }
  }

  render() {
    return (
      <button id={this.props.id} 
      className="operator"
      onClick={this.handleClick}
      >
      {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    updateContent: display => dispatch(updateContent(display)),
    divide: display => dispatch(division(display))
});

export default connect(
  null,
  mapDispatchToProps
)(Divide);
