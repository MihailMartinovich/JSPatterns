import sortTypes from '../Constants/sortTypes.js';
import utils from '../utils.js';

class OldSorter {
  sort(array, type) {
    const arrayCopy = array
      ? array.slice(0,)
      : [];

    switch(type) {
      case sortTypes.ASC:
        return utils.sortAsc(arrayCopy);
      case sortTypes.DESC:
        return utils.sortDesc(arrayCopy);
      default:
        return [];
    }
  }
}

export default OldSorter;