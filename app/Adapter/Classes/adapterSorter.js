import sortTypes from '../Constants/sortTypes.js';
import NewSorter from './newSorter.js';

class AdapterSorter {
  constructor(){
    this.newSorter = new NewSorter();
  }

  sort(array, type) {
    const arrayCopy = array
      ? array.slice(0,)
      : [];

    switch(type) {
      case sortTypes.ASC:
        return this.newSorter.sortAsc(arrayCopy);
      case sortTypes.DESC:
        return this.newSorter.sortDesc(arrayCopy);
      default:
        return [];
    }
  }
}

export default AdapterSorter;