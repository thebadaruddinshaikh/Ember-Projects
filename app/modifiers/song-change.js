import { modifier } from 'ember-modifier';

export default modifier(function songChange(
  element,
  [isplaying, updt, next, playsong]
) {
  element.addEventListener('canplay', loaded);
  element.addEventListener('timeupdate', updateTime);
  element.addEventListener('ended', next);
  function loaded() {
    console.log(isplaying);
    if (isplaying) {
      setTimeout(() => {
        playsong(isplaying);
      }, 250);
    }
    console.log('From canplay');
  }
  function updateTime() {
    let { duration, currentTime } = element;
    let precComp = (currentTime / duration) * 100;
    updt(precComp);
  }

  return () => element.removeEventListener('canplay', loaded);
});
