import React from "react";
import Comment from './Comment'

class CommentList extends React.Component {
    
    render () {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment key={comment.id} author={comment.author} date={comment.date}>
                    {comment.text}
                </Comment>
            )
        })
        return (
            <div>
               {commentNodes}
            </div>
        )
    }
}

export { CommentList as default}