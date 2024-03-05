import React, { Component } from "react";
import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";
import Clear from "./Clear";
import Equals from "./Equals";
import Nums from "./Nums";
import "../style/Calculator.css"

class Keypad extends Component {

  render() {
    return (
      <div className="calculator-keys">
        <Add
            button={"+"}
            id={"add"}
            display={this.props.display}
            type={"operator"}
          />

        <Subtract
            button={"-"}
            id={"subtract"}
            display={this.props.display}
            type={"operator"}
          />

        <Divide
              button={"/"}
              id={"divide"}
              type={"operator"}
              display={this.props.display}
          />

        <Multiply
              button={"*"}
              id={"multiply"}
              type={"operator"}
              display={this.props.display}
          />

        <Nums button={"9"} id={"nine"} value={"9"} type={"num"} />
        <Nums button={"8"} id={"eight"} value={"8"} type={"num"} />
        <Nums button={"7"} id={"seven"} value={"7"} type={"num"} />

        <Nums button={"6"} id={"six"} value={"6"} type={"num"} />
        <Nums button={"5"} id={"five"} value={"5"} type={"num"} />
        <Nums button={"4"} id={"four"} value={"4"} type={"num"} />
        
        <Nums button={"3"} id={"three"} value={"3"} type={"num"} />
        <Nums button={"2"} id={"two"} value={"2"} type={"num"} />
        <Nums button={"1"} id={"one"} value={"1"} type={"num"} />

        <Nums button={"0"} id={"zero"} value={"0"} type={"num"} />

        <Clear button={"C"} id={"clear"} type={"clear"} />

        <Equals
            button={"="}
            id={"equals"}
            display={this.props.display}
            type={"equals"}
          />
      </div>
    );
  }
}

export default Keypad;
