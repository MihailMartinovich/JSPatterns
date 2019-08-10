class HardboundBook {
  constructor(book) {
    if(!book) {
      return null;
    }
    
    book.isHardbound = true;
    
    book.revert = () => {
      book.isHardbound = false;
    }

    return book;
  }
}

export default HardboundBook;