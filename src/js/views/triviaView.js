import { elements } from './base.js';

export const displayQuestion = question => {
  elements.triviaQuestionText.innerText = question;
  elements.triviaAnswer.value = "";
}