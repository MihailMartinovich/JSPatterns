import { Iterator, IteratorWithGenerator } from './Classes/index.js';

const runIteratorExample = () => {
  const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const iterator = new Iterator(collection);
  const iteratorWithGenerator = new IteratorWithGenerator(collection);

  console.log('using Symbol.Iterator and spread: ', ...iterator);

  console.log('using Symbol.Iterator and for...of: ');
  for(const value of iterator) {
    console.log(value);
  }

  console.log('using Generator: ');
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
  console.log(iteratorWithGenerator.next().value);
}

export default runIteratorExample;