import types from '../Constants/types.js';

class Paragraph {
  constructor(...customArguments) {
    console.log(customArguments);
    
    const _type = types.PARAGRAPH;

    this.getType = () => {
      return _type.description;
    }
  }

  getLength = () => {
    return 'Short piece of text';
  }
}

export default Paragraph;