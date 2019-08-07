import Factory from './Factory/index.js';
import textTypes from './Factory/Constants/types.js';

const textFactory = new Factory('Text Factory');
const article = textFactory.createText(textTypes.ARTICLE);
const paragraph = textFactory.createText(textTypes.PARAGRAPH);

console.log('Article object: ', article.getCreatedBy());
console.log('Article object represents: ', article.getLength());

console.log('Paragraph object: ', paragraph.getCreatedBy());
console.log('Paragraph object represents: ', paragraph.getLength());