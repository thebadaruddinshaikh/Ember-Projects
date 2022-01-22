import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class IndexController extends Controller {
  songList = ['ukulele', 'summer', 'hey'];
  @tracked current = 0;
  // @tracked isPlaying = false;

  @action
  next() {
    if (this.current == this.songList.length - 1) this.current = 0;
    else this.current++;
    // setTimeout(() => {
    //   this.playSong(this.isPlaying);
    // }, 250);
  }
  @action
  prev() {
    if (this.current == 0) this.current = this.songList.length - 1;
    else this.current--;
    // setTimeout(() => {
    //   this.playSong(this.isPlaying);
    // }, 250);
  }

  get currentSong() {
    return this.songList[this.current];
  }
  // @action
  // playPause() {
  //   if (this.isPlaying) this.isPlaying = false;
  //   else this.isPlaying = true;
  //   this.playSong(this.isPlaying);
  // }

  // playSong(cond) {
  //   let audioElement = document.querySelector('#audio');
  //   if (cond) audioElement.play();
  //   else audioElement.pause();
  // }
}
