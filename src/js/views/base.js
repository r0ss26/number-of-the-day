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
  reverseDigitsButton: document.querySelector('#reverseDigits'),
  numberOfTheDay: document.querySelector('#number-of-the-day'),
  factsList: document.querySelector('#number-of-the-day--facts'),
  submitAnswerButton: document.querySelector('#submit', checkAnswer)
};

export const renderLoader = parent => {
  const loader = `
      <div class="${elementStrings.loader}">
          <svg>
              <use href="img/icons.svg#icon-cw"></use>
          </svg>
      </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
