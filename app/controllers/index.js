import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  //intialising the router service to transition to pages
  @service router;
  //initilaise papperPattern to save and use the paper pattern
  //set from the teacher page
  @service papperPattern;

  @tracked isInValid = false;
  @tracked errorMessage = 'All Fields are Mandatory';

  //handle the onclick event on the generate button
  //initialses form validation
  //transitions to the next page onvalid
  @action
  onClickGenerate() {
    let pattern = this.prepareData();
    this.validateForm(pattern);
    //updates the pattern in the service
    this.papperPattern.updatePaperPattern(pattern);
    if (!this.isInValid) this.router.transitionTo('questions');
  }

  //prepares the data to be sent to the service
  //that will be used in the route to student page
  //to generate paper
  prepareData() {
    let noOfQuest = document.querySelector('#no-questions').value;
    let questTypeList = [];
    let questDiff = '';

    let checkBoxIdList = ['#add', '#sub', '#mul'];
    let radioButtonIdList = ['#easy', '#med', '#hard'];

    checkBoxIdList.forEach((id) => {
      let checkBox = document.querySelector(id);
      if (checkBox.checked) questTypeList.push(checkBox.value);
    });
    radioButtonIdList.forEach((id) => {
      let radioButton = document.querySelector(id);
      if (radioButton.checked) questDiff = radioButton.value;
    });
    return [noOfQuest, questTypeList, questDiff];
  }

  //performs form validation
  validateForm(pattern) {
    let num = parseInt(pattern[0]);
    let type = pattern[1];
    let diff = pattern[2];

    this.errorMessage = '';
    if (!Number.isInteger(num) || num <= 0)
      this.errorMessage += 'Number of questions must be int';
    else if (type.length == 0)
      this.errorMessage += ' Please Select atleast one question type';

    if (this.errorMessage != '') this.isInValid = true;
    else this.isInValid = false;
  }
}
