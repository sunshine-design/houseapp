import { createStore } from "redux";

let store = createStore(function(state = 0, action) {
  switch (action.type) {
    case "changenum":
      return state + action.num;
    default:
      return state;
  }
});

store.dispatch({
  type: "changenum",
  num: 1
});
store.dispatch({
  type: "changenum",
  num: 1
});
store.dispatch({
  type: "changenum",
  num: 1
});

store.dispatch({
  type: "changenum",
  num: -1
});

console.log(store.getState());
export default store;
