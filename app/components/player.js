import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PlayerComponent extends Component {
  @tracked isPlaying = false;
  @action
  playPause() {
    if (this.isPlaying) this.isPlaying = false;
    else this.isPlaying = true;
    this.playSong(this.isPlaying);
  }
  @action
  playSong(cond) {
    let audioElement = document.querySelector('#audio');
    if (cond) audioElement.play();
    else audioElement.pause();
  }
  updateTimeBar(comp) {
    let elem = document.querySelector('.progress');
    elem.style.width = `${comp}%`;
  }
}
