import React, { Component } from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

export default class Comment extends Component {
   render() {
      const { comment, onAddClick } = this.props
      return (
         <li>
            <span>{comment.commentText}</span>
            <AddComment onAddClick = {onAddClick} question={comment}/>
            <CommentList comments={comment.comments} onAddClick = {onAddClick}/>
            {/* <span>Votes: {comment.votes}             </span>
            <button onClick={()=>upvote(comment)}>Upvote</button>
            <button onClick={()=>downvote(comment)}>Downvote</button> */}
         </li>
      )
   }
}