import { UPDATE } from "./actionsTypes";
import { ADD } from "./actionsTypes";
import { SUBTRACT } from "./actionsTypes";
import { MULTIPLY } from "./actionsTypes";
import { DIVIDE } from "./actionsTypes";
import { CLEAR } from "./actionsTypes";
import { EQUAL } from "./actionsTypes";

export const updateContent = content => ({
  type: UPDATE, 
  payload: {
    input: content,
    operation: "num"
  }
})

export const addition = () => ({
  type: ADD,
  payload: {
    operation: "operator"
  }
});

export const subtraction = () => ({
  type: SUBTRACT,
  payload: {
    operation: "operator"
  }
})

export const multiplication = () => ({
  type: MULTIPLY,
  payload: {
    operation: "operator"
  }
});

export const division = () => ({
  type: DIVIDE,
  payload: {
    operation: "operator"
  }
});

export const clearDisplay = () => ({
  type: CLEAR,
  payload: {
    operation: "clear"
  }
})

export const equal = () => ({
  type: EQUAL,
  payload: {
    operation: "equal"
  }
})