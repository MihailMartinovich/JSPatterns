import types from '../Constants/types.js';

class Article {
  constructor(customArguments) {
    const _type = types.ARTICLE;

    this.getType = () => {
      return _type.description;
    }
  }

  getLength = () => {
    return 'Very Very Very long text.';
  }
}

export default Article;