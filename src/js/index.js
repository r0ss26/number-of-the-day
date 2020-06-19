import { elements, renderLoader, clearLoader } from './views/base';
import '../style.css';
import NumberOfTheDay from './models/Number';
import Trivia from './models/Trivia';
import * as numberView from './views/numberView';
import * as triviaView from './views/triviaView';

const state = {
  trivia: {
    questions: null,
    score: 0,
    answered: []
  }
};

/**
 * NUMBER OF THE DAY CONTROLLER
 */
const controlNumberOfTheDay = async () => {
  renderLoader(elements.numberOfTheDay);
  renderLoader(elements.factsList);
  
  state.numberOfTheDay = new NumberOfTheDay;
  try {
    await state.numberOfTheDay.getNumber();
    numberView.displayNumber(state.numberOfTheDay.numberData.number);
    numberView.displayFacts(state.numberOfTheDay.numberData['general-facts'])
  } catch(error) {
    alert('Oops! Something went wrong.')
  }
  
  clearLoader(elements.factsList);
  if (state.numberOfTheDay.numberData) setupEventListeners();
}
controlNumberOfTheDay();

const setupEventListeners = () => {
  let bases, numerals, recreational;
  bases = state.numberOfTheDay.numberData.bases;
  numerals = state.numberOfTheDay.numberData.numerals;
  recreational = state.numberOfTheDay.numberData.recreational;

  elements.convertDecimalButton.addEventListener('click', () => {
    numberView.displayNumber(state.numberOfTheDay.numberData.number);
  });

  elements.convertBinaryButton.addEventListener('click', function() {
    numberView.displayNumber(bases.binary.display);
  });

  elements.convertHexButton.addEventListener('click', () => {
    numberView.displayNumber(bases.hexadecimal.display);
  });

  elements.convertOctalButton.addEventListener('click', () => {
    numberView.displayNumber(bases.octal.display);
  });
  
  elements.convertRomanButton.addEventListener('click', () => {
    numberView.displayNumber(numerals.roman.display)
  })

  elements.convertBabylonianButton.addEventListener('click', () => {
    numberView.displayNumber(numerals.babylonian.display)
  })

  elements.convertChineseButton.addEventListener('click', () => {
    numberView.displayNumber(numerals.chinese.display)
  })

  elements.displayNumberOfDigitsButton.addEventListener('click', () => {
    numberView.displayNumber(recreational.noofdigits.display)
  })

  elements.displaySumDigitsButton.addEventListener('click', () => {
    numberView.displayNumber(recreational.digitssum.display)
  })

  elements.reverseDigitsButton.addEventListener('click', () => {
    numberView.displayNumber(recreational.reverse.display)
  })
}

/**
 * TRIVIA CONTROLLER
 */
const controlTrivia = async () => {
  let trivia, questions;
  trivia = new Trivia();
  
  renderLoader(elements.triviaQuestion);
  try {
    questions = await trivia.getQuestions();
    state.trivia.questions = questions;
  } catch (error) {
    alert('Oops! Something went wrong.')
    console.log(error)
  }
  clearLoader(elements.triviaQuestion);

  const updateQuestion = () => {
    state.trivia.currentQuestion = questions.clues[Math.floor(Math.random() * questions.clues.length)];
    triviaView.displayQuestion(state.trivia.currentQuestion.question);
  }
  updateQuestion();

  elements.submitAnswerButton.addEventListener('click', () => {
    if (state.trivia.currentQuestion.answer.toLowerCase() === elements.triviaAnswer.value.toLowerCase()) {
      state.trivia.score++;
      elements.triviaScore.innerText = state.trivia.score;
      updateQuestion();
    }
  })
}
controlTrivia();
