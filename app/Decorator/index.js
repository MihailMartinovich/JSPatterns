import { Book, HardboundBook } from "./Classes/index";


const runDecoratorExample = () => {
  const book = new Book('title', 'text');

  console.log('Book: ', book.title, book.text);

  console.log('Book author: ', book.author);
  try {
    book.author = 'new Author';
  } catch(e) {
    console.log('Exception cought. Tried to modify read only property Author with Readonly JS decorator.');
  }
  

  const hardboundBook = new HardboundBook(book);

  console.log('Hardbound Book: ', hardboundBook.title, hardboundBook.text, hardboundBook.isHardbound);
  
  hardboundBook.text = 'changedText';
  hardboundBook.revert();

  console.log('Hardbound Book: ', hardboundBook.title, hardboundBook.text, hardboundBook.isHardbound);
};


export default runDecoratorExample;