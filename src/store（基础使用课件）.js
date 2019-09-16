// 解构createStore
import { createStore } from "redux";
// 创建store仓库
// reducer  改变store值的唯一值
/* function() {
    return "张三";
  } */
// state ：       默认值
// action:通知的类型
var store = createStore(function(state = "张三", action) {
  console.log(action);
  switch (action.type) {
    case "changename":
      return action.name;
    default:
      return state;
  }
});
// action  通知
var a = {
  type: "changename", //通知类型
  name: "李四" //值
};
// dispatch  发出
store.dispatch(a);
// getState  取值
console.log(store.getState());
// 暴露store
export default store;
