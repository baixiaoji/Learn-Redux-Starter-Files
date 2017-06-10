// increment
export function increment(index){
    return {
        type:"INCREMENT",
        index
    }
}
// add comment
export function addComent(postid,author,comment){
    return {
        type: "ADD_COMMENT",
        postid,
        author,
        comment

    }
}
// remove comment
export function removeComment(postid,i){
    return {
        type:"REMOVE_COMMENT",
        i,
        postid
    }
}