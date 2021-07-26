const { createStore } = require("redux");
const { INCREMENT, DECREMENT, MULTIPLICATION } = require("./actionType");

const INITIAL_STATE = {
  message: "hello initial",
  count: 0,
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action.type);

  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

let store = createStore(reducer);

// const newState = { ...store.getState(), message: "hallo" };

// console.log(store.getState().message);

store.dispatch({
  type: INCREMENT,
});
store.dispatch({
  type: INCREMENT,
});
store.dispatch({
  type: INCREMENT,
});
store.dispatch({
  type: INCREMENT,
});
console.log(store.getState());

store.dispatch({
  type: DECREMENT,
  payload: 10,
});

console.log(store.getState());

// action creator
function decrement(number) {
  return {
    type: DECREMENT,
    payload: number,
  };
}

store.dispatch(decrement(3));

store.dispatch({
  type: MULTIPLICATION,
});

console.log(store.getState());

// action types
