import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
   render() {
      const { comments,onAddClick } = this.props
      return (
         <ul>
            {comments.map((comment,index) =>
               <Comment
                  key = {index}
                  comment = {comment}
                  onAddClick = {onAddClick}
               />
            )}
         </ul>
      )
   }
}