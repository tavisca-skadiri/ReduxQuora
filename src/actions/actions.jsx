export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

let nextQuestionId = 0;
let nextCommentId = 0;

export function addQuestion(questionText) {
   return {
      type: ADD_QUESTION,
      id: nextQuestionId++,
      questionText
   };
}

export function addComment(commentText,question) {
   return {
      type: ADD_COMMENT,
      id: nextCommentId++,
      question:question,
      commentText:commentText
   };
}

export function upvote(question) {
   return {
      type: UPVOTE,
      question:question
   };
}

export function downvote(question) {
   return {
      type: DOWNVOTE,
      question:question
   };
}