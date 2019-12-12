import React, { Component } from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

export default class Question extends Component {
   constructor(props) {
      super(props);
      this.state = {
         visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
   }
   toggleVisibility(){
      if (this.state.visibility){
         this.setState({
            visibility: false
         });
      }
      else{
         this.setState({
            visibility: true
         })
      }
   }
   render() {
      const { onAddClick, question, upvote, downvote } = this.props
      return (
         <li>
            {question.questionText}
            {/* <button onClick={this.toggleVisibility}></button>             */}
            {/* {this.state.visibility ? <AddComment onAddClick = {onAddClick} question={question}/>:null} */}
            <AddComment onAddClick = {onAddClick} question={question}/>
            <CommentList comments={question.comments} onAddClick = {onAddClick} upvote={upvote} downvote={downvote}/>
            <span>Votes: {question.votes}             </span>
            <button onClick={()=>upvote(question)}>Upvote</button>
            <button onClick={()=>downvote(question)}>Downvote</button>
         </li>
      )
   }
}