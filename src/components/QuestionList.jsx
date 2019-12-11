import React, { Component } from 'react'
import Question from './Question.jsx'

export default class QuestionList extends Component {
   render() {
      const { onAddClick, questions, upvote, downvote } = this.props
      console.log(questions);
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