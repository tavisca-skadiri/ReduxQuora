import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
   render() {
      const { comments, onAddClick, upvote, downvote } = this.props
      // comments.sort(function(a,b){
      //    return (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0);
      // });
      return (
         <ul>
            {comments.map((comment,index) =>
               <Comment
                  key = {index}
                  comment = {comment}
                  onAddClick = {onAddClick}
                  upvote = {upvote}
                  downvote = {downvote}
               />
            )}
         </ul>
      )
   }
}