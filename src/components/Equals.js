import React, { Component } from "react";
import { connect } from "react-redux";
import { equal } from "../actions/actions";
import { updateContent } from "../actions/actions";
import "../style/Calculator.css"

class Equals extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.id === "equals") {
        this.props.equal(this.props.display);
    }else {
      this.props.updateContent(this.props.button);
    }
  }

  render() {
    return (
      <button id={this.props.id} 
      className="equal-sign"
      onClick={this.handleClick}
      >
      {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    updateContent: display => dispatch(updateContent(display)),
    equal: display => dispatch(equal(display))
});

export default connect(
  null,
  mapDispatchToProps
)(Equals);