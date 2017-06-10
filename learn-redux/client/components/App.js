import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as actionCreators from "../actions/actionsCreator"

import Main from "./Main"
// 映射 state -> props 
function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}
// dispatch / action    ——> props
function mapdispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)
}

// 建立联系 将Main下面一层一层的子组件上加上props值  说实话就是自己省了props的值
const App = connect(mapStateToProps,mapdispatchToProps)(Main)

export default App