import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { inject as service } from '@ember/service';

export default class QuestionsController extends Controller {
  @tracked submitted = false;
  //initialises the router service
  //to handle the transition
  @service router;

  //handles the onclick event
  //on the sumbmit button from student page
  @action
  onSubmit() {
    this.getScore();
  }

  testSubmitted() {
    console.log('form submitted');
  }
  //generates the score of the student
  //and further transitions to the result page
  //by setting the model to the score of the student
  getScore() {
    let inputList = document.querySelectorAll('.student-response');
    let studentAnswers = [];
    let score = 0;
    for (let i = 0; i < inputList.length; i++) {
      studentAnswers[i] = inputList[i].value;
    }
    let modelAnswer = this.modelAnswer();
    for (let i = 0; i < modelAnswer.length; i++) {
      if (studentAnswers[i] == modelAnswer[i]) score++;
    }

    this.router.transitionTo('result', `${score}/${modelAnswer.length}`);
  }

  //generates modal answer to questions from the student page
  modelAnswer() {
    let questions = this.model;
    let modelAnswer = questions.map((inputs) => {
      return inputs['ans'];
    });

    return modelAnswer;
  }
}
