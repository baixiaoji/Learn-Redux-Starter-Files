// increment
export function increment(index){
    return {
        type:"INCREMENT",
        index
    }
}
// add comment
export function addComment(postid,author,comment){
    console.log(author , comment)
    return {
        type: "ADD_COMMENT",
        postid,
        author,
        comment
    }
}
// remove comment
export function removeComment(postid,i){
    console.log("remove")
    return {
        type:"REMOVE_COMMENT",
        i,
        postid
    }
}