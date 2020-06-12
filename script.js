async function getNumberOfTheDay() {
  // Get todays number from API then process it into JSON/
  let response = await fetch('https://api.math.tools/numbers/nod');
  let responseJSON = await response.json()
  console.log(responseJSON);
  
  let numberOfTheDay = responseJSON.contents.nod.numbers;

  // Render the decimal number and related facts/
  displayNumberOfTheDay(numberOfTheDay.number)
  displayNumberOfTheDayFacts(numberOfTheDay['general-facts'])

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

async function getRandomFact(number) {
  let fact = await fetch(`https://api.math.tools/numbers/fact?number=${number}`);
  console.log(fact)
}

getRandomFact(12);
