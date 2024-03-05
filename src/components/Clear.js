import React, { Component } from "react";
import { connect } from "react-redux";
import { clearDisplay } from "../actions/actions";
import { updateContent } from "../actions/actions";
import "../style/Calculator.css"

class Clear extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.id === "clear") {
        this.props.clear();
    }
  }

  render() {
    return (
      <button id={this.props.id} 
      className="all-clear"
      onClick={this.handleClick}
      >
      {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    updateContent: display => dispatch(updateContent(display)),
    clear: display => dispatch(clearDisplay(display))
});

export default connect(
  null,
  mapDispatchToProps
)(Clear);