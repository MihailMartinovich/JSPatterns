import utils from '../utils.js';

class NewSorter {
  sortAsc(array) {
    const arrayCopy = array
      ? array.slice(0,)
      : [];
    
    return utils.sortAsc(arrayCopy);
  }

  sortDesc(array) {
    const arrayCopy = array
      ? array.slice(0,)
      : [];
    
    return utils.sortDesc(arrayCopy);
  }
}

export default NewSorter;