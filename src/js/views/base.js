import LoaderSVG from '../../assets/images/icons.svg'

export const elements = {
  nodSpinner: document.querySelector('#nod-spinner'),
  factsSpinner: document.querySelector('#facts-spinner'),
  triviaQuestionSpinner: document.querySelector('#trivia-spinner'),
  convertDecimalButton: document.querySelector('#decimalConversion'),
  convertBinaryButton: document.querySelector('#binaryConversion'),
  convertHexButton: document.querySelector('#hexConversion'),
  convertOctalButton: document.querySelector('#octalConversion'),
  convertRomanButton: document.querySelector('#romanNumeral'),
  convertBabylonianButton: document.querySelector('#babylonianNumeral'),
  convertChineseButton: document.querySelector('#chineseNumeral'),
  displaySumDigitsButton: document.querySelector('#sumOfDigits'),
  displayNumberOfDigitsButton: document.querySelector('#numberOfDigits'),
  reverseDigitsButton: document.querySelector('#reverseDigits'),
  numberOfTheDay: document.querySelector('#number-of-the-day'),
  factsList: document.querySelector('#number-of-the-day--facts'),
  submitAnswerButton: document.querySelector('#submit'),
  factsList: document.querySelector('#number-of-the-day--facts'),
  triviaQuestion: document.querySelector('.math-trivia-question'),
  triviaQuestionText: document.querySelector('#math-trivia-question'),
  triviaAnswer: document.querySelector('#answer'),
  triviaScore: document.querySelector('#score'),
  newQuestion: document.querySelector('#new-question'),
  questionsCount: document.querySelector('#total-questions')
};

export const elementStrings = {
  loader: 'spinner-boarder'
}

export const renderLoader = parent => {
  const loader = `
    <div class="spinner-border text-success" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader)
};

export const clearLoader = parent => {
  const loader = parent.childNodes[1];
  parent.removeChild(loader);
};
