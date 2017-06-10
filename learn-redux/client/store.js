import { createStore, compse } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import { browserHistory } from "react-router"

// import root reducer

import rootReducer from "./reducers/index"

import comments from "./data/comments"
import posts from "./data/posts"

// m默认的状态

const defaultStore = {
    posts,
    comments
}
//createStore的参数第一个 redux  第二个 store
const store = createStore(rootReducer,defaultStore)

export const History = syncHistoryWithStore(browserHistory,store)

export default store;