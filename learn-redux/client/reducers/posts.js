/**
 * reducer  return  new state
 * @param {*} state  current state 
 * @param {*} action 触发的事件（action）
 */
function posts(state = [], action) {
    switch (action.type) {
        case "INCREMENT":
            // const newState = Object.assign({}, state)
            const i = action.index;
            // newState[i].likes ++;
            // console.log("758",newState)
            // return [...newState]
            return [
                ...state.slice(0, i),
                { ...state[i], likes: state[i].likes + 1 },
                ...state.slice(i + 1)
            ]
        default:
            return state;
    }
}

export default posts;