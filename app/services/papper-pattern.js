import Service from '@ember/service';
import { A } from '@ember/array';

export default class PapperPatternService extends Service {
  paperpatternData = A([]);

  //updates the paperPatter list based on the pattern provided
  updatePaperPattern(paperPatternList) {
    this.paperpatternData.clear();
    this.paperpatternData.pushObject(paperPatternList);
  }

  //returns the pattern set
  getPaperPattern() {
    return this.paperpatternData[0];
  }
}
