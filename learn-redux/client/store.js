import { createStore, compse } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import { browserHistory } from "react-router"

// import root reducer

import rootReducer from "./reducers/index"

import comments from "./data/comments"
import posts from "./data/posts"

// 默认的状态

const defaultStore = {
    posts,
    comments
}
//createStore的参数第一个 redux  第二个 store
// 为了让store  知道有哪些reducers   dispatch 触发 reducers
// http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
const store = createStore(rootReducer,defaultStore)

export const history = syncHistoryWithStore(browserHistory,store)

export default store;