import { Article, Paragraph } from './Classes/index.js';
import types from './Constants/types.js';

class Factory {
  constructor(name) {
    const _name = name;

    this.createText = (type, ...customArguments) => {
      if(!type) {
        return null;
      }

      let text;

      switch(type) {
        case types.ARTICLE:
          text = new Article(customArguments)
          break;
        case types.PARAGRAPH:
          text = new Paragraph(customArguments)
          break;
        default:
          text = null;
          break;
      }

      text.getCreatedBy = function(){
        return `${this.getType()} created by ${_name}`;
      }

      return text;
    }
  }
}

export default Factory;