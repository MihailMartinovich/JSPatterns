import { Article, Paragraph } from './Classes/index.js';
import types from './Constants/types.js';

const runFactoryExample = () => {
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

  const textFactory = new Factory('Text Factory');
  const article = textFactory.createText(types.ARTICLE);
  const paragraph = textFactory.createText(types.PARAGRAPH);

  console.log('Article object: ', article.getCreatedBy());
  console.log('Article object represents: ', article.getLength());

  console.log('Paragraph object: ', paragraph.getCreatedBy());
  console.log('Paragraph object represents: ', paragraph.getLength());
};


export default runFactoryExample;