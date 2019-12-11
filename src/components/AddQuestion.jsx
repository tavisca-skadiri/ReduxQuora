import React, { Component } from 'react'

export default class AddQuestion extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
         </div>
      )
   }
   handleClick(e) {
      const node = this.refs.input
      const questionText = node.value.trim()
      this.props.onAddClick(questionText)
      node.value = ''
   }
}