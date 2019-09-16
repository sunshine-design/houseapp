import { createStore, combineReducers } from "redux";
/* function test(state = "test", action) {
  switch (action.tpye) {
    default:
      return state;
  }
}
let bigReducers = combineReducers({
  test
});
let store = createStore(bigReducers);
console.log(store.getState())
export default store; */

function name(state = "张三", action) {
  switch (action.type) {
    default:
      return state;
  }
}
function sex(state = "男", action) {
  switch (action.type) {
    default:
      return state;
  }
}
function age(state = 18, action) {
  switch (action.type) {
    default:
      return state;
  }
}
function index(state = 1, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default createStore(
  combineReducers({
    name,
    sex,
    age,
    index
  })
);
