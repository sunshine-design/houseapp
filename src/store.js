import { createStore, combineReducers } from "redux";
function test(state = "test", action) {
  switch (action.type) {
    default:
      return state;
  }
}
function historyArr(state = [], action) {
  switch (action.type) {
    case "addhistory":
      // 去重
      /*  // 循环state数组，删除老数据
      for (let i = 0; i < state.length; i++) {
        if (state[i].name === action.obj.name) {
          state.splice(i, 1);
          break;
        }
      }
      //  添加新数据
      return [action.obj, ...state]; */
      //  fliter过滤
      /* let newstatearr = state.filter(item => {
        return item.name !== action.obj.name;
      });
      return [action.obj, ...newstatearr]; */
      return [action.obj,...state.filter(item=>item.name!==action.obj.name)]
    default:
      return state;
  }
}
export default createStore(
  combineReducers({
    test,
    historyArr
  })
);
