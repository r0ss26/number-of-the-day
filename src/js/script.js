import '../style.css'

async function getNumberOfTheDay() {
  // Get todays number from API then process it into JSON/
  let response, responseJSON
  try {
    response = await fetch('https://api.math.tools/numbers/nod');
    responseJSON = await response.json()
  }
  catch {
    displayNumberOfTheDay('Oops, something went wrong!')
  }
  console.log(responseJSON);
  
  let numberOfTheDay = responseJSON.contents.nod.numbers;

  // Render the decimal number and related facts
  displayNumberOfTheDay(numberOfTheDay.number)
  displayNumberOfTheDayFacts(numberOfTheDay['general-facts'])
  document.querySelector('#nod-spinner').style.display = "none";
  document.querySelector('#facts-spinner').style.display = "none";


  // Event Listeners for displaying different number formats.
  document.querySelector('#decimalConversion').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.number)
    console.log(this)
  })

  document.querySelector('#binaryConversion').addEventListener('click', function() {
    displayNumberOfTheDay(numberOfTheDay.bases.binary.value)
    
  })

  document.querySelector('#hexConversion').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.bases.hexadecimal.value)
  })

  document.querySelector('#octalConversion').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.bases.octal.value)
  })

  
  document.querySelector('#romanNumeral').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.numerals.roman.display)
  })

  document.querySelector('#babylonianNumeral').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.numerals.babylonian.display)
  })

  document.querySelector('#chineseNumeral').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.numerals.chinese.display)
  })

  document.querySelector('#numberOfDigits').addEventListener('click', () => {
    console.log(numberOfTheDay.recreational.noofdigits.display);
    
    displayNumberOfTheDay(numberOfTheDay.recreational.noofdigits.display)
  })

  document.querySelector('#sumOfDigits').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.recreational.digitssum.display)
  })

  document.querySelector('#reverseDigits').addEventListener('click', () => {
    displayNumberOfTheDay(numberOfTheDay.recreational.reverse.display)
  })
}

function displayNumberOfTheDay(number) {
  const numberOfTheDayNode = document.querySelector('#number-of-the-day');
  numberOfTheDayNode.innerHTML = number;
}

function displayNumberOfTheDayFacts(facts) {
  const factsList = document.querySelector('#number-of-the-day--facts');
  
  for (let fact in facts) {
    factsList.appendChild(document.createElement('li')).innerHTML = facts[fact].display
  } 
}

getNumberOfTheDay()



async function getMathTrivia() {
  let response = await fetch('https://jservice.io/api/category?id=969');
  let data = await response.json();
  
  console.log(data);
  
  displayMathTrivia(data);
  
  
}

function displayMathTrivia(questions) {
  let questionNode = document.querySelector('#math-trivia-question');
  let questionData = questions.clues[1];
  document.querySelector('#trivia-spinner').style.display = "none";
  
  console.log('here');
  
  questionNode.innerText = questionData.question;
}

getMathTrivia();



function checkAnswer(question, answer) {
  
}

document.querySelector('#submit', checkAnswer)





























// async function getRandomNumberFact() {
//   let response, fact;
//   try {
//     response = await fetch(`http://numbersapi.com/random/trivia`)
//     fact = await response.text();
//   } catch (error) {
//     displayRandomNumberFact('Oops! Something went wrong.')
//   }
//   displayRandomNumberFact(fact)
//   document.querySelector('#fact-spinner').style.display = "none";
// }

// function displayRandomNumberFact(fact) {
//   document.querySelector('#random-number-fact').innerHTML = fact;
// }

// getRandomNumberFact();

// document.querySelector('#new-fact').addEventListener('click', async () => {
//   document.querySelector('#random-number-fact').style.display = "none";
//   document.querySelector('#fact-spinner').style.display = "inline-block";
//   await getRandomNumberFact();
//   document.querySelector('#random-number-fact').style.display = "block";
//   document.querySelector('#fact-spinner').style.display = "none";
// })