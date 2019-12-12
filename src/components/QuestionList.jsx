import React, { Component } from 'react'
import Question from './Question.jsx'

export default class QuestionList extends Component {
   render() {
      const { onAddClick, questions, upvote, downvote } = this.props
      questions.sort(function(a,b){
         return (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0);
      });
      return (
         <ul>
            {questions.map(question =>
               <Question 
                  key = {question.id}
                  question = {question}
                  onAddClick = {onAddClick}
                  upvote = {upvote}
                  downvote = {downvote}
               />
            )}
         </ul>
      )
   }
}