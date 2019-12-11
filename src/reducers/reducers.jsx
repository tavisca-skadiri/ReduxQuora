import { combineReducers } from 'redux'
import { ADD_QUESTION, ADD_COMMENT } from '../actions/actions'

function questions(state = [], action) {
   switch (action.type) {
      case ADD_QUESTION:
         return [
            ...state, {
               id: action.id,
               questionText: action.questionText,
               votes: 0,
               comments:[]
            }
         ]
      case ADD_COMMENT:
         let commentText = action.commentText;
         let comment = {
            commentText:commentText, 
            id:action.id, 
            comments:[]
         }
         action.question.comments.push(comment);
         return [...state]
      case 'UPVOTE':
         console.log(action.question);
         action.question.votes += 1
         return [...state]
      case 'DOWNVOTE':
         action.question.votes -= 1
         return [...state]
      default:
         return state
   }
}

const quoraApp = combineReducers({
   questions
})
export default quoraApp