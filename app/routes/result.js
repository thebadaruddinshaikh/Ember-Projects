import Route from '@ember/routing/route';

export default class ResultRoute extends Route {
  model(param) {
    return param.score;
  }
}
