import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BoxComponent extends Component {
  //keeping track if the field is edited to avoid double filling
  edited = false;
  @tracked val = '';

  //function to updat the value of the cell
  @action setVal(newval, tp, id, isOver) {
    //updates if the cell is unedited and the game is not over
    if (!this.edited && !isOver) {
      tp(id);
      console.log(id);
      this.val = newval;
      this.edited = true;
    }
  }
}
