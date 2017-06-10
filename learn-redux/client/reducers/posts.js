/**
 * reducer  return  new state
 * @param {*} state  current state 
 * @param {*} action 触发的事件（action）
 */
function posts(state = [], action){
    console.log(state, action)
    return state;
}

export default posts;