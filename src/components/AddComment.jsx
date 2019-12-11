import React, { Component } from 'react'

export default class AddComment extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
            <button onClick = {(e) => this.handleClick(e)}>
               Comment
            </button>
         </div>
      )
   }
   handleClick(e) {
      const node = this.refs.input
      const commentText = node.value.trim()
      let question = this.props.question;
      this.props.onAddClick(commentText,question)
      node.value = ''
   }
}