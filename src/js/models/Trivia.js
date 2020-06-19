export default class Trivia {
  async getQuestions() {
    let response, data;
    try {
      response = await fetch('https://jservice.io/api/category?id=969');
      data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}