import { elements } from './base.js';

export const displayQuestion = question => {
  elements.triviaQuestionText.innerText = question;
  elements.triviaAnswer.value = "";
}

export const updateScore = score => {
  elements.triviaScore.innerText = score.points;
  elements.questionsCount.innerText = score.totalQuestions;
}