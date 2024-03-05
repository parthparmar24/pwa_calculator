import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContent } from "../actions/actions";
import "../style/Calculator.css"

class Nums extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.id) {
      this.props.updateContent(this.props.button);
    }
  }

  render() {
    return (
      <button id={this.props.id} 
      className="button"
      onClick={this.handleClick}
      >
      {this.props.button}
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    updateContent: display => dispatch(updateContent(display)),
});

export default connect(
  null,
  mapDispatchToProps
)(Nums);