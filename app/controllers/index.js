import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked curr = 'X';
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  @tracked isDraw = false;
  @tracked isWinner = false;
  @tracked winner = 'X';
  count = 0;
  @action
  //function changes the current player and checks for wins/draws on the table
  //keeps track if the board is filled
  changeCurr(id) {
    this.arr[id] = this.curr;
    this.curr == 'X' ? (this.curr = 'O') : (this.curr = 'X');
    //number of filled cells
    this.count += 1;
    //check if the win is diagonal
    this.checkDiag();
    //check if the win is rowwise
    this.checkRows();
    //check fi the win in column wise
    this.checkCols();
    if (this.count == 9 && !this.isWinner) this.isDraw = true;
  }

  //functions checks for wins in the diagonal direction
  checkDiag() {
    let count = 0;
    let prev = '';
    for (let i = 0; i <= 8; i += 4) {
      if (prev != this.arr[i]) {
        prev = this.arr[i];
        count = 1;
      } else {
        count++;
      }
    }
    if (count == 3) {
      this.isWinner = true;
      this.winner = prev;
      console.log('winner!!');
    } else count = 0;

    for (let i = 2; i <= 6; i += 2) {
      if (prev != this.arr[i]) {
        prev = this.arr[i];
        count = 1;
      } else {
        count++;
      }
    }
    if (count == 3) {
      this.isWinner = true;
      this.winner = prev;
      console.log('winner!!');
    } else count = 0;
  }
  //function checks if the win is in a row
  checkRows() {
    for (let j = 0; j <= 6; j += 3) {
      let count = 0;
      let prev = '';
      for (let i = j; i < j + 3; i++) {
        if (prev != this.arr[i]) {
          prev = this.arr[i];
          count = 1;
        } else {
          count++;
        }
      }
      if (count == 3) {
        this.isWinner = true;
        this.winner = prev;
        console.log('winner!!');
        break;
      }
    }
  }
  //function checks if the win is in a column
  checkCols() {
    for (let j = 0; j <= 3; j++) {
      let count = 0;
      let prev = '';
      for (let i = j; i <= j + 6; i += 3) {
        if (prev != this.arr[i]) {
          prev = this.arr[i];
          count = 1;
        } else {
          count++;
        }
      }
      if (count == 3) {
        this.isWinner = true;
        this.winner = prev;
        console.log('winner!!');
        break;
      }
    }
  }

  //function to reload the page to reset the board
  @action
  reloadPage() {
    console.log('hello');
    location.reload();
  }
}
