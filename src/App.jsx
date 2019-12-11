import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion, addComment, upvote, downvote } from './actions/actions'

import AddQuestion from './components/AddQuestion'
import QuestionList from './components/QuestionList'

class App extends Component {
   render() {
      const { dispatch, visibleQuestions } = this.props
      return (
         <div>
            <AddQuestion onAddClick = {questionText => dispatch(addQuestion(questionText))} />
            <QuestionList questions = {visibleQuestions} 
                          onAddClick = {(commentText,question) =>dispatch(addComment(commentText,question))}
                          upvote = {question => dispatch(upvote(question))}
                          downvote = {question => dispatch(downvote(question))}/>
         </div>
      )
   }
}
function select(state) {
   return {
      visibleQuestions: state.questions
   }
}
export default connect(select)(App);