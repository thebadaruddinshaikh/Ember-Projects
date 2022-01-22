import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestionsRoute extends Route {
  //initialising the service to use
  //the model set by the teachers page
  @service papperPattern;

  model() {
    //gets the paperpatter set from the teachers page
    //using the paper pattern service
    let pattern = this.papperPattern.getPaperPattern();
    return this.generateQuestions(pattern);
  }
  //generates the questions based on the pattern retrived from the service
  generateQuestions(pattern) {
    let noOfQuest = pattern[0];
    let typeOfQuest = pattern[1];
    let diff = pattern[2];
    let eachQuestionCount = Math.floor(noOfQuest / typeOfQuest.length);
    let questList = [];
    let j = 1;
    for (let x of pattern[1]) {
      let i = eachQuestionCount;
      while (i > 0) {
        let a = Math.floor(this.generateNumbers(2, diff));
        let b = Math.floor(this.generateNumbers(1, diff));
        questList.push({
          no: j,
          que: `${a} ${x}  ${b}`,
          ans: this.getAnswer(a, x, b),
        });
        j++;
        i--;
      }
    }
    return questList;
  }

  //generates the number according conditons provided by the
  //generatQuestions function
  generateNumbers(a, b) {
    if (b == 0) {
      return this.getSingleDigitNumber();
    } else if (b == 1) {
      if (a == 1) {
        return this.getSingleDigitNumber();
      } else {
        return this.getDoubleDigitNumber();
      }
    } else {
      return this.getDoubleDigitNumber();
    }
  }
  //get the answer to the question generated
  getAnswer(a, x, b) {
    if (x == '+') return a + b;
    else if (x == '-') return a - b;
    else return a * b;
  }
  //function to get double digit number
  getDoubleDigitNumber() {
    let doubleDigit = Math.random() * 100;
    while (doubleDigit < 10) doubleDigit = Math.random() * 100;
    return doubleDigit;
  }
  //function to get single digit number
  getSingleDigitNumber() {
    let singleDigit = Math.random() * 10;
    while (singleDigit < 1) singleDigit = Math.random() * 10;
    return singleDigit;
  }
}
