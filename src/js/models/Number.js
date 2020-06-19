export default class NumberOfTheDay {
  async getNumber() {
    let response, responseJSON, numberOfTheDay;
    try {
      response = await fetch('https://api.math.tools/numbers/nod');
      responseJSON = await response.json();
      this.numberData = responseJSON.contents.nod.numbers;
    }
    catch(error) {
      console.log(error);
    }
  }
}