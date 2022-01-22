import { modifier } from 'ember-modifier';

export default modifier(function onChange(element, [callback]) {
  element.addEventListener('change', handleChange, false);

  function handleChange() {
    console.log(this.model);
  }
});
